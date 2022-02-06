from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.views import Response

from .models import Blog, BlogSections
from .serializers import BlogSummarySerializer, BlogDetailedSerializer


# Create your views here.
@api_view(['GET', ])
def get_blogs_summarized(request):
    """List top new blogs in summary view"""
    if request.method == 'GET':
        paginator = PageNumberPagination()
        paginator.page_size = 20
        blogs = Blog.objects.all()
        result_page = paginator.paginate_queryset(blogs, request)
        serializer = BlogSummarySerializer(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


@api_view(['GET', ])
def get_blog(request, blog_slug):
    if request.method == 'GET':
        blog = Blog.objects.filter(slug=blog_slug).first()
        serializer = BlogDetailedSerializer(blog)
        return Response(serializer.data, status=status.HTTP_200_OK)
