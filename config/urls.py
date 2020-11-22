"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

admin.site.site_header = 'DAO Clinic'
admin.site.site_title = 'DAO Clinic'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.authapp.urls')),
    path('api/config/', include('apps.configurations.urls')),
    path('api/appointments/', include('apps.appointments.urls')),
    path('', include('apps.main.urls')),
]

# to enable viewing images in media directory
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)