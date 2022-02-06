from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import path
from django.views.generic import RedirectView

from .views import available_days_list, prices_list, redeem_coupon

urlpatterns = [
    path('available-days/', available_days_list, name='available-days'),
    path('prices/', prices_list, name='prices-list'),
    path('redeem/<str:code>/', redeem_coupon, name='redeem-coupon'),
]
