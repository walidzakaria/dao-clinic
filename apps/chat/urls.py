from django.urls import path
# from django.core.mail import send_mail

from .views import get_chat, active_rooms, contact_us

urlpatterns = [
    # path('<str:room_name>/', room, name='room'),
    path('get-chat/<str:room_id>/', get_chat, name='chat-history'),
    path('active-rooms/', active_rooms, name='active-rooms'),
    # path('video/video/', views.video, name='video'),
    path('contact_message/', contact_us, name='contact-us-message'),
]
