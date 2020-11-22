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
@api_view(['GET', ])
def available_days_list(request):
    """ List available working weekdays """
    if request.method == 'GET':
        today = timezone.now().date()
        available_days = AvailableDays.objects.all()
        serializer = AvailableDaysSerializer(available_days, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', ])
def prices_list(request):
    """ List Session Prices based on booking date """
    today = timezone.now().date()
    prices = Prices.objects.filter(
        effective_date__gte=today).order_by('-effective_date').first()
    serializer = PricesSerializer(prices, many=False)

    return Response(serializer.data, status=status.HTTP_200_OK)