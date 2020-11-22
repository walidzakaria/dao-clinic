from rest_framework import serializers

from .models import Appointments


class AppointmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = '__all__'


class BusySlotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = ('id', 'date', 'time', )
