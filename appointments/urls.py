from django.urls import path
from .views import busy_slots_list, user_appointments, get_currency,\
    create_appointment, pay, callback, check_payment

urlpatterns = [
    path('busy-slots/<str:selected_date>/', busy_slots_list, name='busy-slots'),
    path('my-appointments/', user_appointments, name='my-appointments'),
    path('create/', create_appointment, name='create-appointment'),
    path('get-currency/', get_currency, name='get-currency'),
    path('callback/', callback, name='callback'),
    path('check-payment/<str:cart_id>/', check_payment, name='check-payment'),
]
