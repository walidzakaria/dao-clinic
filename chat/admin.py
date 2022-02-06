from django.contrib import admin
from .models import Messages


# Register your models here.
class MessagesAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'message', 'time',)
    search_fields = ('name', 'phone', 'email',)
    list_filter = ('time',)


admin.site.register(Messages, MessagesAdmin)
