from django.urls import path
from .views import busy_slots_list, user_appointments, get_currency,\
    create_appointment, pay, callback

urlpatterns = [
    path('busy_slots/<str:selected_date>/', busy_slots_list, name='busy-slots'),
    path('my_appointments/', user_appointments, name='my-appointments'),
    path('create/', create_appointment, name='create-appointment'),
    path('get_currency/', get_currency, name='get-currency'),
    path('callback/', callback, name='callback'),
    path('payment/', pay, name='pay'),
]
