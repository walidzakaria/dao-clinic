from django.urls import re_path

from apps.chat import consumers

websocket_urlpatterns = [
    re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
]

# channel_routing = {
#     'websocket.connect': consumers.ws_connect,
#     'websocket.receive': consumers.ws_receive,
#     'websocket.disconnect': consumers.ws_disconnect,
# }