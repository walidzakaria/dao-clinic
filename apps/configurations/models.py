from django.db import models


# Create your models here.
class AvailableDays(models.Model):
    effective_date = models.DateField()
    DAY_STATUS = (
        (True, 'Yes'),
        (False, 'No'),
    )
    saturday = models.BooleanField(default=False, choices=DAY_STATUS)
    sunday = models.BooleanField(default=False, choices=DAY_STATUS)
    monday = models.BooleanField(default=False, choices=DAY_STATUS)
    tuesday = models.BooleanField(default=False, choices=DAY_STATUS)
    wednesday = models.BooleanField(default=False, choices=DAY_STATUS)
    thursday = models.BooleanField(default=False, choices=DAY_STATUS)
    friday = models.BooleanField(default=False, choices=DAY_STATUS)
    open_time = models.TimeField()
    close_time = models.TimeField()

    class Meta:
        verbose_name_plural = 'Available Days'
        ordering: ['-effective_date']


class Prices(models.Model):
    effective_date = models.DateField()
    single_session_price = models.DecimalField(max_digits=14, decimal_places=2)
    multi_session_price = models.DecimalField(max_digits=14, decimal_places=2)

    class Meta:
        verbose_name_plural = 'Prices'
        ordering: ['-effective_date']
