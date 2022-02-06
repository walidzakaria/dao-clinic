from django.urls import path

from .views import home, auth, session, blog_detailed
from appointments.views import pay

urlpatterns = [
    path('', home, name='home'),
    path('about/', home, name='about'),
    path('booking/', home, name='booking'),
    path('doctors/', home, name='doctors'),
    path('services/', home, name='services'),
    path('blog/', home, name='blog'),
    path('blog/<str:slug>/', blog_detailed, name='blog-detailed'),
    path('login/', home, name='login'),
    path('signup/', home, name='signup'),
    path('reset/', home, name='reset'),
    path('auth/activate/<str:uid>/<str:token>/', auth, name='activation'),
    path('auth/password/reset/confirm/<str:uid>/<str:token>/', auth, name='activation'),
    path('chat-admin', home, name='chat-admin'),
    path('session-admin/', home, name='session-admin'),
    path('session/<str:session_id>/', session, name='session'),
    path('doctor/', home, name='doctor'),
    path('payment/', pay, name='pay'),
]
