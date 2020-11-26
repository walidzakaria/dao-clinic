from django.urls import path

from .views import home, temp_chat

urlpatterns = [
    path('', home, name='home'),
    path('chat/', temp_chat, name='chat'),
    path('about/', home, name='about'),
    path('appointments/', home, name='appointments'),
    path('prices/', home, name='prices'),
    path('contact/', home, name='contact'),
]
