# from django.urls import re_path
#
# from apps.chat import consumers
#
# websocket_urlpatterns = [
#     re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
# ]
#
# # channel_routing = {
# #     'websocket.connect': consumers.ws_connect,
# #     'websocket.receive': consumers.ws_receive,
# #     'websocket.disconnect': consumers.ws_disconnect,
# # }
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import AllowedHostsOriginValidator
from django.urls import path, re_path

from apps.chat import consumers

application = ProtocolTypeRouter({
    'websocket': AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            # URLRouter([...]) # Empty for now because we don't have a consumer yet.
            re_path(r'ws/chat/(?P<room_name>\w+)/$', consumers.ChatRoomConsumer.as_asgi()),
        )
    ),
})