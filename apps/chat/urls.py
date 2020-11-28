from django.urls import path
# from django.core.mail import send_mail

from .views import room

urlpatterns = [
    path('<str:room_name>/', room, name='room'),
    # path('video/video/', views.video, name='video'),
]
