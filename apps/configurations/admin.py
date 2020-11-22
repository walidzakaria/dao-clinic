from django.contrib import admin
from .models import AvailableDays, Prices


# Register your models here.
class AvailableDaysAdmin(admin.ModelAdmin):
    list_display = ('effective_date', 'saturday', 'sunday', 'monday', 'tuesday',
                    'wednesday', 'thursday', 'friday', 'open_time', 'close_time',)

    fieldsets = (
        (None, {
            'fields': ('effective_date',)
        }),
        ('Days', {
            'fields': ('saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday',),
        }),
        ('Opening Hours', {
            'fields': ('open_time', 'close_time',)
        })
    )


class PricesAdmin(admin.ModelAdmin):
    list_display = ('effective_date', 'single_session_price', 'multi_session_price', )


admin.site.register(AvailableDays, AvailableDaysAdmin)
admin.site.register(Prices, PricesAdmin)