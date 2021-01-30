import decimal
import json

import requests
from django.shortcuts import render
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response

from config import settings
from .models import Appointments, Currency, Payment, PaymentDetail, Transaction
from .serializers import AppointmentsSerializer, BusySlotsSerializer, \
    CurrencySerializer
from .utils import convert_to_date

# Create your views here.
from ..authapp.models import User
from ..configurations.models import Prices


@api_view(['GET', ])
def busy_slots_list(request, selected_date):
    """ List busy slots against selected date """
    if request.method == 'GET':
        date_filter = convert_to_date(selected_date)
        if not date_filter:
            return Response(data={'message': 'wrong date format'},
                            status=status.HTTP_400_BAD_REQUEST)

        busy_slots = Appointments.objects.filter(date=date_filter).all()
        serializer = BusySlotsSerializer(busy_slots, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes([IsAuthenticated, ])
def user_appointments(request):
    """ List logged user appointments """
    if request.method == 'GET':
        user = request.user
        appointments = Appointments.objects.filter(user=user).all()
        serializer = AppointmentsSerializer(appointments, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST', ])
@permission_classes([IsAuthenticated, ])
def create_appointment(request):
    """ Create single or multiple appointments """
    if request.method == 'POST':
        new_cart_id = Transaction()
        new_cart_id.save()
        cart_id = new_cart_id.cart_id()
        last_currency = Currency.objects.order_by('-id').first()
        exchange_rates = json.loads(last_currency.rates)
        today = timezone.now().date()
        prices = Prices.objects.filter(
            effective_date__lte=today).order_by('-effective_date').first()
        for e in request.data:
            e['user'] = request.user.id
            e['cart_id'] = cart_id
            if e['type'] == 'S':
                price = prices.single_session_price
            else:
                price = prices.multi_session_price
            e['price'] = round(decimal.Decimal(exchange_rates['EGP']) * price, 2)
            print(e['time'])
        serializer = AppointmentsSerializer(data=request.data, many=True)
        if serializer.is_valid():
            payment_request = retrieve_payment_link(
                cart_id, 'EGP', e['price'], e['type'], e['user']
            )
            if payment_request[1] == 200:
                serializer.save()
                return Response(data={
                    'url': payment_request[0]['redirect_url'],
                    'cart_id': cart_id,
                }, status=status.HTTP_201_CREATED)
            else:
                return Response(payment_request[0], status=status.HTTP_501_NOT_IMPLEMENTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', ])
def get_currency(request):
    """ List currency with exchange rates
    if currency is out-dates, it get updates from api.currencyfreaks.com
    """
    if request.method == 'GET':
        last_currency = Currency.objects.order_by('-id').first()
        if last_currency:
            td = timezone.now() - last_currency.date
            difference_in_hours = td.seconds / 60 / 60
            print(difference_in_hours)
            if difference_in_hours <= 1:
                serializer = CurrencySerializer(last_currency, many=False)
                print('update rates existing')
                return Response(serializer.data, status=status.HTTP_200_OK)

        retrieved_currency = retrieve_currency()
        if retrieved_currency['rates']:
            new_currency = Currency(rates=json.dumps(retrieved_currency['rates']))
            new_currency.save()
            serializer = CurrencySerializer(new_currency, many=False)
            print('new rates retrieved')
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print('failed to retrieve new rates')
            return Response(data={'message': 'error'},
                            status=status.HTTP_503_SERVICE_UNAVAILABLE)


def retrieve_currency():
    r = requests.get(f'https://api.currencyfreaks.com/latest?apikey={settings.CURRENCY_KEY}')
    print(r.json())
    return r.json()


def retrieve_payment_link(cart_id, currency, amount, session_type, customer):
    print(customer)
    customer_info = User.objects.filter(id=customer).first()
    first_name = customer_info.first_name or customer_info.username
    last_name = customer_info.last_name or customer_info.username

    if session_type == 'S':
        description = 'Purchase of single session'
    else:
        description = 'Purchase of 4 sessions'
    request_data = {
        "profile_id": settings.PAYMENT_ID,
        "tran_type": "sale",
        "tran_class": "ecom",
        "cart_id": cart_id,
        "cart_currency": currency,
        "cart_amount": str(amount),
        "cart_description": description,
        "paypage_lang": "en",
        "customer_details": {
            "name": f'{first_name} {last_name}',
            "email": f'{customer_info.email}',
            "phone": customer_info.phone or '000000',
            "street1": "unknown address",
            "city": "cairo",
            "state": "cai",
            "country": "EG",
            "zip": "12345",
            "ip": "1.1.1.1"
        },
        "callback": "https://daoegypt.com/api/appointments/callback/",
        "return": "https://daoegypt.com/payment/",
        "framed": True,
        "framed_return_top": True,
        "hide_shipping": True,
    }
    r = requests.post(f'https://secure-egypt.paytabs.com/payment/request/',
                      data=json.dumps(request_data),
                      headers={
                          'Authorization': settings.PAYMENT_KEY,
                      })
    print(r.json())
    print(r.status_code)
    return r.json(), r.status_code


@api_view(['POST', 'GET', ])
def pay(request):
    if request.method == 'POST':
        post_data = request.data
        new_payment = Payment(cart_id=post_data['cartId'],
                              email=post_data['customerEmail'],
                              resp_status=post_data['respStatus'],
                              tran_ref=post_data['tranRef'],
                              signature=post_data['signature'],
                              )
        new_payment.save()
        # return Response(data={'resp_status': new_payment.resp_status}, status=status.HTTP_201_CREATED)
        return render(request, 'index.html', {
            'resp_status': new_payment.resp_status
        })

    elif request.method == 'GET':
        return render(request, 'index.html')


@api_view(['POST', 'GET', ])
def callback(request):
    if request.method == 'POST':
        post_data = request.data
        new_log = PaymentDetail(
            tran_ref=post_data['tran_ref'],
            cart_id=post_data['cart_id'],
            cart_description=post_data['cart_description'],
            tran_currency=post_data['tran_currency'],
            tran_total=post_data['tran_total'],
            email=post_data['customer_details']['email'],
            response_status=post_data['payment_result']['response_status'],
            response_message=post_data['payment_result']['response_message'],
            transaction_time=post_data['payment_result']['transaction_time'],
            card_type=post_data['payment_info']['card_type'],
            card_scheme=post_data['payment_info']['card_scheme'],
            payment_description=post_data['payment_info']['payment_description'],
            expiryMonth=post_data['payment_info']['expiryMonth'],
            expiryYear=post_data['payment_info']['expiryYear'],
        )
        new_log.save()
        appointments = Appointments.objects.filter(cart_id=new_log.cart_id).all()
        if new_log.response_status == 'A':
            for appointment in appointments:
                appointment.confirmed = True
                appointment.save()
        else:
            appointments.delete()

        return Response(data={'message': 'OK'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        print(request.data)
        return Response(data=request.data, status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes([IsAuthenticated, ])
def check_payment(request, cart_id):
    """ Checks payment status """
    if request.method == 'GET':
        user = request.user
        payment = PaymentDetail.objects.filter(cart_id=cart_id).first()
        if not payment:
            return Response(data={'message': 'wrong id'}, status=status.HTTP_404_NOT_FOUND)
        if payment.email != user.email:
            return Response(data={'message': 'not allowed'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(data={'status': payment.response_status}, status=status.HTTP_200_OK)
