from django.db import models
from apps.authapp.models import User


# Create your models here.
class Appointments(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    TYPE = (
        ('S', 'Single'),
        ('M', 'Multiple'),
    )
    type = models.CharField(max_length=1, choices=TYPE, default='S')
    SEQUENCE = (
        (None, 'Single Session'),
        (1, '1st Session'),
        (2, '2nd Session'),
        (3, '3rd Session'),
        (4, '4th Session'),
    )
    sequence = models.IntegerField(null=True, blank=True,
                                   choices=SEQUENCE, default=None)
    date = models.DateField()
    time = models.TimeField()
    price = models.DecimalField(max_digits=14, decimal_places=2)
    currency = models.CharField(max_length=3)
    comments = models.TextField(max_length=250, null=True, blank=True)
    confirmed = models.BooleanField(default=False)
    cart_id = models.CharField(max_length=20)

    class Meta:
        unique_together = (('date', 'time'),)
        verbose_name_plural = 'Appointments'
        ordering = ['date', 'time']


class Currency(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    rates = models.TextField(max_length=2000, default='')

    class Meta:
        verbose_name_plural = 'Currency Rates'
        ordering = ['-date', ]


class Payment(models.Model):
    cart_id = models.CharField(max_length=20)
    email = models.EmailField()
    resp_status = models.CharField(max_length=10)
    tran_ref = models.CharField(max_length=20)
    signature = models.CharField(max_length=100)
    date = models.DateTimeField(auto_now_add=True)


class PaymentDetail(models.Model):
    tran_ref = models.CharField(max_length=20)
    cart_id = models.CharField(max_length=20)
    cart_description = models.CharField(max_length=100)
    tran_currency = models.CharField(max_length=3)
    tran_total = models.DecimalField(max_digits=12, decimal_places=2)
    email = models.EmailField()
    response_status = models.CharField(max_length=5)
    response_message = models.CharField(max_length=100)
    transaction_time = models.DateTimeField()
    card_type = models.CharField(max_length=20)
    card_scheme = models.CharField(max_length=20)
    payment_description = models.CharField(max_length=20)
    expiryMonth = models.PositiveSmallIntegerField()
    expiryYear = models.PositiveIntegerField()


class Transaction(models.Model):
    id = models.BigAutoField(primary_key=True)

    def cart_id(self):
        str_id = str(self.id)
        return str_id.zfill(5)
