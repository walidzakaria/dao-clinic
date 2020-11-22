from django.urls import path
from .views import busy_slots_list, user_appointments

urlpatterns = [
    path('busy_slots/<str:selected_date>', busy_slots_list, name='busy-slots'),
    path('my_appointments/', user_appointments, name='my-appointments'),
]
