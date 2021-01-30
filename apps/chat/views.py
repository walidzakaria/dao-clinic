from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response
from django.core.mail import send_mail
from django.db.models import Q


from apps.chat.models import Chat, Rooms, Messages
from apps.chat.serializers import ChatSerializer, RoomsSerializer, MessageSerializer


# def room(request, room_name):
#     return render(request, 'chatroom.html', {
#         'room_name': room_name
#     })
from config import settings


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


@api_view(['POST',])
def contact_us(request):
    if request.method == 'POST':

        serializer = MessageSerializer(data=request.data, many=False)
        if serializer.is_valid():
            serializer.save()
            mail_body = f'''
Name:    {serializer.data['name']}
Phone:   {serializer.data['phone']}

Message: {serializer.data['message']}
'''
            print(mail_body)
            send_mail('New Request', mail_body,
                      settings.EMAIL_HOST_USER, ['info@daoegypt.com', ], True)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET',])
@permission_classes([IsAuthenticated, ])
def is_doctor(request):
    if request.method == 'GET':
        user = request.user
        result = user.groups.filter(name='Doctor').exists()
        return Response(data={'message': result}, status=status.HTTP_200_OK)
