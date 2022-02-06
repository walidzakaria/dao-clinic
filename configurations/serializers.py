from rest_framework import serializers

from .models import AvailableDays, Prices


class AvailableDaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableDays
        fields = '__all__'


class PricesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prices
        fields = '__all__'
