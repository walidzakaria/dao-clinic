from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from .models import Appointments, Currency


class AppointmentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appointments
        fields = '__all__'

        validators = [
            UniqueTogetherValidator(
                queryset=Appointments.objects.all(),
                fields=['date', 'time']
            )
        ]


class BusySlotsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointments
        fields = ('id', 'date', 'time', )


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ('id', 'date', 'rates', )
