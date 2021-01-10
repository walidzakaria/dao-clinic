# from django.contrib.sites import requests
import requests
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics, views
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from djoser.conf import django_settings
from django.utils.crypto import get_random_string

from .models import User, LogInfo


# Create your views here.
from .serializers import CurrentUserSerializer, LogInfoSerializer


@api_view(['GET'])
def restricted(request, *args, **kwargs):
    return Response(data='Only for logged-in users', status=status.HTTP_200_OK)


# class UserActivationView(APIView):
#     def get(self, request, uid, token):
#         protocol = 'https://' if request.is_secure() else 'http://'
#         web_url = protocol + request.get_host()
#         post_url = web_url + "/auth/users/activate/"
#         post_data = {'uid': uid, 'token': token}
#         result = requests.post(post_url, data = post_data)
#         content = result.text()
#         return Response(content)


# class ActivateUser(GenericAPIView):
#
#     def get(self, request, uid, token, format=None):
#         payload = {'uid': uid, 'token': token}
#         protocol = 'https://' if request.is_secure() else 'http://'
#         domain = request.get_host()
#         url = f"{protocol}{domain}/auth/users/activation/"
#         response = requests.post(url, data=payload)
#
#         if response.status_code == 204:
#             return Response({}, response.status_code)
#         else:
#             return Response(response.json())


class PasswordReset(GenericAPIView):

    def get(self, request, uid, token, format=None):
        payload = {'uid': uid, 'token': token}

        return JsonResponse(payload)


@api_view(['PATCH', ])
@permission_classes([IsAuthenticated, ])
def deactivate_user(request):
    """ Set use active = False when updating data """
    if request.method == 'PATCH':
        user = request.user
        user.is_active = False
        user.save()

        return Response(data={'message': 'OK'}, status=status.HTTP_200_OK)



@api_view(['GET', ])
def add_log_info(request):
    """ Created a new session code """

    if request.method == 'GET':
        code = get_random_string(length=12)
        while LogInfo.objects.filter(code=code).first():
            code = get_random_string(length=12)
        save_log(request, code)
        print('new code is: ', code)
        return Response(data=code, status=status.HTTP_200_OK)


def save_log(request, code):
    device = ''
    ip = get_client_ip(request)
    print(ip)
    if request.user_agent.is_mobile:
        device = 'Mobile'
    elif request.user_agent.is_tablet:
        device = 'Tablet'
    elif request.user_agent.is_pc:
        device = 'PC'
    elif request.user_agent.is_bot:
        device = "Bot"

    if request.user_agent.is_touch_capable:
        device += '-Touch'
    if request.user.is_anonymous:
        current_user = None
    else:
        current_user = request.user
    device_family = request.user_agent.device.family  # returns 'iPhone'
    print(request.user_agent)
    browser = request.user_agent.browser.family  # returns 'Mobile Safari'
    operating_system = f'{request.user_agent.os.family}({request.user_agent.os.version_string})'
    new_log = LogInfo(code=code, device=device, device_family=device_family,
                      browser=browser, operating_system=operating_system, user=current_user, ip=ip)
    new_log.save()


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    print(x_forwarded_for)
    print(request.META)
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip