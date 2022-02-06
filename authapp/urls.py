from django.urls import path, include, re_path
from authapp import views
from authapp.views import PasswordReset, add_log_info, deactivate_user

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('', include('djoser.urls.jwt')),
    path('users/me/change/', deactivate_user, name='deactivate-user'),
    path('restricted/', views.restricted),
    path('password/reset/confirm/<str:uid>/<str:token>/', PasswordReset.as_view()),
    path('get-code/', add_log_info, name='user-code'),
]