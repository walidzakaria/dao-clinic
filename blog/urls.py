from django.contrib.staticfiles.storage import staticfiles_storage
from django.urls import path
from django.views.generic import RedirectView
from .views import get_blogs_summarized, get_blog


urlpatterns = [
    path('blogs/', get_blogs_summarized, name='blogs'),
    path('blog/<str:blog_slug>/', get_blog, name='get-blog'),
]
