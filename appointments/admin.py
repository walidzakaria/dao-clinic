from django.contrib import admin
from .models import Appointments, Payment, PaymentDetail


# Register your models here.
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'type', 'sequence', 'date', 'time',
                    'currency', 'price', 'confirmed', 'cart_id', 'coupon',)
    search_fields = ('user__username', 'user__email', 'cart_id', )
    list_filter = ('date', 'time', 'type', 'sequence', 'confirmed', 'currency', )


class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'cart_id', 'email', 'resp_status', 'tran_ref',
                    'signature', 'date',)
    search_fields = ('cart_id', 'tran_ref', 'email',)
    list_filter = ('date', 'resp_status',)


class PaymentDetailAdmin(admin.ModelAdmin):
    list_display = ('tran_ref', 'cart_id', 'cart_description', 'tran_currency',
                    'tran_total', 'email', 'response_status', 'response_message',
                    'transaction_time', 'card_type', 'card_scheme',
                    'payment_description', 'expiryMonth', 'expiryYear',)
    search_fields = ('tran_ref', 'cart_id',)
    list_filter = ('tran_currency',
                   'response_status',
                   'transaction_time', 'card_type', 'card_scheme', )


admin.site.register(Appointments, AppointmentAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(PaymentDetail, PaymentDetailAdmin)