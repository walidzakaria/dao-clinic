from django.urls import path

from .views import home, auth, session, pay

urlpatterns = [
    path('', home, name='home'),
    path('about/', home, name='about'),
    path('appointments/', home, name='appointments'),
    path('prices/', home, name='prices'),
    path('contact/', home, name='contact'),
    path('login/', home, name='login'),
    path('signup/', home, name='signup'),
    path('reset/', home, name='reset'),
    path('auth/activate/<str:uid>/<str:token>/', auth, name='activation'),
    path('auth/password/reset/confirm/<str:uid>/<str:token>/', auth, name='activation'),
    path('chat-admin', home, name='chat-admin'),
    path('session-admin/', home, name='session-admin'),
    path('session/<str:session_id>/', session, name='session'),
    path('pay/', pay, name='pay'),
]
