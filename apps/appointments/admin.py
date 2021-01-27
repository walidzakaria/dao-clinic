from django.contrib import admin
from .models import Appointments, Payment


# Register your models here.
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'type', 'sequence', 'date', 'time', 'price', 'comments', 'confirmed',)
    search_fields = ('user__username', 'user__email', )
    list_filter = ('date', 'time', 'type', 'sequence', 'confirmed',)


class PaymentAdmin(admin.ModelAdmin):
    list_display = ('log', )


admin.site.register(Appointments, AppointmentAdmin)
admin.site.register(Payment, PaymentAdmin)
