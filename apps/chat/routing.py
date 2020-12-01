from django.urls import re_path

from apps.chat import consumers

websocket_urlpatterns = [
    re_path(r'wss/chat/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
]