from rest_framework import serializers

from .models import Chat, Rooms, Messages
from authapp.models import LogInfo, User


class ChatSerializer(serializers.ModelSerializer):
    username = serializers.CharField(read_only=True, source='user.username')
    first_name = serializers.CharField(read_only=True, source='user.first_name')
    last_name = serializers.CharField(read_only=True, source='user.last_name')

    class Meta:
        model = Chat
        fields = ('room', 'time', 'user', 'message', 'username', 'first_name',
                  'last_name', 'is_client', 'user_info', 'is_read', )


class RoomsSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.IntegerField(allow_null=True)
    # username = serializers.CharField(source='user.email', allow_null=True)
    # username = serializers.ReadOnlyField(source='user.username')
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Chat
        fields = ('room', 'user_info', 'username', )


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = ('name', 'phone', 'email', 'message', 'time',)


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'get_chat')
