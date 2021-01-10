from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response
from django.db.models import Q


from apps.chat.models import Chat, Rooms
from apps.chat.serializers import ChatSerializer, RoomsSerializer


# def room(request, room_name):
#     return render(request, 'chatroom.html', {
#         'room_name': room_name
#     })


@api_view(['GET', ])
# @permission_classes([IsAuthenticated, ])
def get_chat(request, room_id):
    if request.method == 'GET':
        chat = Chat.objects.filter(room=room_id).all()

        serializer = ChatSerializer(chat, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET',])
@permission_classes([IsAuthenticated, ])
def active_rooms(request):
    if request.method == 'GET':
        user = request.user
        print(user)
        print(user.groups)
        if not user.groups.filter(name='Customer Service').exists():
            return Response(data={'message': "you don't have permission"},
                            status=status.HTTP_401_UNAUTHORIZED)

        rooms = Rooms.objects.order_by().values('room').distinct()
        serializer = RoomsSerializer(rooms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)