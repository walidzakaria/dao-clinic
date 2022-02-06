from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from .models import User, LogInfo


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password',
                  'first_name', 'last_name', 'phone', 'country', )


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name',
                  'last_name', 'phone', 'country', )


class LogInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = LogInfo
        fields = '__all__'
