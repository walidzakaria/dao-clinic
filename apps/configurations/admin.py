from django.contrib import admin
from .models import AvailableDays, Prices, Coupon


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


class CouponAdmin(admin.ModelAdmin):
    list_display = ('id', 'code', 'valid_from', 'valid_till', 'discount', 'percent', )
    search_fields = ('code', )
    list_filter = ('valid_from', 'valid_till', 'percent', )


admin.site.register(AvailableDays, AvailableDaysAdmin)
admin.site.register(Prices, PricesAdmin)
admin.site.register(Coupon, CouponAdmin)