from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response

from .models import Appointments
from .serializers import AppointmentsSerializer, BusySlotsSerializer
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
