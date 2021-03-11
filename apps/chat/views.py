from datetime import date
from dateutil.relativedelta import relativedelta

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response
from django.core.mail import send_mail
from django.db.models import Q
from django.db import connection

from apps.authapp.models import User
from apps.chat.models import Chat, Rooms, Messages
from apps.chat.serializers import ChatSerializer, MessageSerializer, ContactsSerializer
from apps.chat.utils import hash_room


# def room(request, room_name):
#     return render(request, 'chatroom.html', {
#         'room_name': room_name
#     })
from config import settings


@api_view(['GET', ])
# @permission_classes([IsAuthenticated, ])
def get_chat(request, room_id, user_type):
    if request.method == 'GET':
        if user_type == 'client' and not request.user.is_anonymous:
            room_id = hash_room(request.user.id)
        print('room code', room_id)
        chat = Chat.objects.filter(room=room_id).all()
        print(chat.count())
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

        # chat = Chat.objects.filter(
        #     time__gte=date.today() + relativedelta(months=-1),
        #     is_client=True,
        # ).order_by().values('room', 'user_info', 'user').distinct()
        date_filter = (date.today() + relativedelta(months=-1)).strftime('%Y-%m-%d')
        query = f'''
            SELECT cc.room, cc.user_info, MAX(cc.time) AS last_time,
            SUM(CASE WHEN cc.is_read = 0 THEN 1 ELSE 0 END) AS unread, cc.user_id
            FROM chat_chat cc
            WHERE cc.is_client = 1
            GROUP BY cc.room, cc.user_info
            HAVING MAX(cc.time) >= '{date_filter}'
            ORDER BY MAX(cc.time) DESC;
        '''
        response = []
        with connection.cursor() as cursor:
            cursor.execute(query)
            for row in cursor.fetchall():
                print(row[0], row[1], row[2])
                new_row = {
                    'room': row[0],
                    'user_info': row[1],
                    'last_seen': row[2],
                    'unread': row[3],
                    'user_id': row[4],
                }
                response.append(new_row)

        return Response(response, status=status.HTTP_200_OK)


@api_view(['GET', ])
@permission_classes([IsAuthenticated, ])
def contact_list(request):
    if request.method == 'GET':
        user = request.user
        if not user.groups.filter(name='Customer Service').exists():
            return Response(data={'message': "you don't have permission"},
                            status=status.HTTP_401_UNAUTHORIZED)
        contacts = User.objects.order_by('username').all()
        serializer = ContactsSerializer(contacts, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)


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
