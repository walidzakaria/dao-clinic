from rest_framework import serializers

from .models import Chat, Rooms
from apps.authapp.models import LogInfo


class ChatSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source='user.username')
    first_name = serializers.CharField(read_only=True, source='user.first_name')
    last_name = serializers.CharField(read_only=True, source='user.last_name')
    # log_info = serializers.CharField(read_only=True, source='')

    class Meta:
        model = Chat
        fields = ('room', 'time', 'user', 'message', 'username', 'first_name',
                  'last_name', 'is_client', 'user_info', )


class RoomsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields = ('room', )
