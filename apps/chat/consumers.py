import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.utils import timezone

from apps.authapp.models import LogInfo
from apps.chat.models import Chat, Rooms


class ChatRoomConsumer(AsyncWebsocketConsumer):

    async def connect(self):
        print('connect room')
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        self.user_info = await self.get_user_info()
        self.user = self.scope['user']

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name,
        )

        await self.accept()
        await self.check_in()

    @database_sync_to_async
    def get_user_info(self):
        return LogInfo.objects.filter(code=self.room_name).first().user_info()

    @database_sync_to_async
    def save_message(self, message):
        new_message = Chat(room=self.room_name, message=message)

        if self.user.id:
            new_message.user = self.user
        new_message.save()

    @database_sync_to_async
    def check_in(self):
        new_room = Rooms(room=self.room_name)
        new_room.save()

    @database_sync_to_async
    def check_out(self):
        connected_room = Rooms.objects.filter(room=self.room_name).first()
        connected_room.delete()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name,
        )
        await self.check_out()

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        print(text_data_json)
        message = text_data_json['message']
        user = text_data_json['user']
        code = self.room_name

        await self.channel_layer.group_send(
            self.room_group_name, {
                'type': 'chat_message',
                'message': message,
                'user': user,
                'code': code,
            }
        )

        await self.save_message(message)

    async def chat_message(self, event):
        message = event['message']
        user = event['user']

        await self.send(text_data=json.dumps({
            'message': message,
            'user': user,
            'user_info': self.user_info,
            'time': str(timezone.now()),
        }))
