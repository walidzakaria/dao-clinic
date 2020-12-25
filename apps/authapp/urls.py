from django.urls import path, include, re_path
from apps.authapp import views
from apps.authapp.views import PasswordReset, add_log_info
from ..main.views import home

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('', include('djoser.urls.jwt')),
    path('restricted/', views.restricted),
    path('activate/<str:uid>/<str:token>/', home, name='activation'),
    path('password/reset/confirm/<str:uid>/<str:token>/', PasswordReset.as_view()),
    path('get-code/', add_log_info, name='user-code')
]