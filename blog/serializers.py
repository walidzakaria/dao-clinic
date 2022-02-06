from rest_framework import serializers

from .models import Blog, BlogSections


class BlogSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('wallpaper', 'user_image', 'by', 'title', 'slug', 'date', 'main_paragraph', )


# class BlogSectionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BlogSections
#         fields = '__all__'
#
#
# class BlogDetailedSerializer(serializers.ModelSerializer):
#     blog_sections = BlogSectionSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = Blog
#         fields = ('title', )


class BlogSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogSections
        fields = '__all__'


class BlogDetailedSerializer(serializers.ModelSerializer):
    sections = BlogSectionSerializer(many=True)

    class Meta:
        model = Blog
        fields = '__all__'
