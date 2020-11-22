from django.urls import path

from .views import home

urlpatterns = [
    path('', home, name='home'),
    path('about/', home, name='about'),
    path('appointments/', home, name='appointments'),
    path('prices/', home, name='prices'),
    path('contact/', home, name='contact'),
]
