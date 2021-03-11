from django.urls import path
# from django.core.mail import send_mail

from .views import get_chat, active_rooms, contact_us, is_doctor, contact_list

urlpatterns = [
    # path('<str:room_name>/', room, name='room'),
    path('get-chat/<str:room_id>/<str:user_type>/', get_chat, name='chat-history'),
    path('active-rooms/', active_rooms, name='active-rooms'),
    # path('video/video/', views.video, name='video'),
    path('contact-message/', contact_us, name='contact-us-message'),
    path('contacts/', contact_list, name='contacts'),
    path('is-doctor/', is_doctor, name='is-doctor'),
]
