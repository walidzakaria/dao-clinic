from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import Response

# Create your views here.
from django.views.decorators.csrf import csrf_exempt


def home(request):
    return render(request, 'index.html', {})


def auth(request, uid, token):
    return render(request, 'index.html', {})


def session(request, session_id):
    return render(request, 'index.html', {})


@csrf_exempt
@api_view(['POST', 'GET',])
# @permission_classes([IsAuthenticated, ])
def pay(request):
    if request.method == 'POST':
        print(request.data)
        return Response(data={'message': 'OK'}, status=status.HTTP_200_OK)
    elif request.method == 'GET':
        print(request.data)
        return Response(data={'message': 'got'}, status=status.HTTP_200_OK)
