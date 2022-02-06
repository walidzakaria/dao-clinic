from django.contrib import admin
from .models import Blog, BlogSections


# Register your models here.
class BlogSectionsAdmin(admin.TabularInline):
    model = BlogSections


class BlogAdmin(admin.ModelAdmin):
    inlines = [BlogSectionsAdmin, ]
    readonly_fields = ('slug', )
    list_display = ('title', 'by', 'date', )


admin.site.register(Blog, BlogAdmin)
