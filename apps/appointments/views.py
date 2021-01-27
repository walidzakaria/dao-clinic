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
from .models import Appointments, Currency, Payment, PaymentLog, PaymentDetails
from .serializers import AppointmentsSerializer, BusySlotsSerializer,\
    CurrencySerializer, PaymentSerializer
from .utils import convert_to_date


# Create your views here.
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
        for e in request.data:
            e['user'] = request.user.id
        serializer = AppointmentsSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', ])
def get_currency(request):
    """ List currency with exchange rates
    if currency is outdates, it get updates from api.currencyfreaks.com
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


@csrf_exempt
@api_view(['POST', 'GET', ])
def callback(request):
    if request.method == 'POST':
        request_data = json.dumps(request.data)
        new_log = PaymentLog(log=request_data)
        new_log.save()
        return Response(data={'message': 'OK'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        print(request.data)
        return Response(data={'message': 'got'}, status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['POST', 'GET',])
def payment(request):
    if request.method == 'POST':
        post_data = request.data
        new_payment = Payment(tran_ref=post_data['tran_ref'],
                              cart_id=post_data['cart_id'],
                              cart_description=post_data['cart_description'],
                              tran_currency=post_data['tran_currency'],
                              tran_total=post_data['tran_total'],
                              email=post_data['email'],
                              response_status=post_data['response_status'],
                              response_message=post_data['response_message'],
                              transaction_time=post_data['transaction_time'],
                              card_type=post_data['card_type'],
                              card_scheme=post_data['card_scheme'],
                              payment_description=post_data['payment_description'],
                              expiryMonth=post_data['expiryMonth'],
                              expiryYear=post_data['expiryYear'],
                              )
        new_payment.save()
        return Response(data={'message': 'got'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        print(request.data)
        return Response(data={'message': 'got'}, status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['POST', 'GET', ])
def pay(request):
    if request.method == 'POST':
        request_data = json.dumps(request.data)
        new_log = PaymentDetails(log=request_data)
        new_log.save()
        return Response(data={'message': 'OK'}, status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        print(request.data)
        return Response(data={'message': 'got'}, status=status.HTTP_200_OK)
