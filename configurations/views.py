from django.shortcuts import render
from django.http import JsonResponse
from django.utils import timezone
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response
import datetime

from .models import AvailableDays, Prices
from .serializers import AvailableDaysSerializer, PricesSerializer


# Create your views here.
from appointments.utils import get_valid_coupon


@api_view(['GET', ])
def available_days_list(request):
    """ List available working weekdays """
    if request.method == 'GET':
        today = timezone.now().date()
        available_days = AvailableDays.objects.filter(
            effective_date__lte=today).order_by('-effective_date').first()
        serializer = AvailableDaysSerializer(available_days, many=False)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', ])
def prices_list(request):
    """ List Session Prices based on booking date """
    today = timezone.now().date()
    prices = Prices.objects.filter(
        effective_date__lte=today).order_by('-effective_date').first()
    serializer = PricesSerializer(prices, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', ])
def redeem_coupon(request, code):
    """ return discount value if code is valid """
    if request.method == 'GET':
        coupon = get_valid_coupon(code)
        if coupon:
            return Response(data={
                'id': coupon.id,
                'discount': coupon.discount,
                'percent': coupon.percent,
            }, status=status.HTTP_200_OK)
        else:
            return Response(data={'message': 'not valid'}, status=status.HTTP_404_NOT_FOUND)
