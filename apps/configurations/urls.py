from django.urls import path
from .views import available_days_list, prices_list

urlpatterns = [
    path('available_days/', available_days_list, name='available-days'),
    path('prices/', prices_list, name='prices-list'),
]
