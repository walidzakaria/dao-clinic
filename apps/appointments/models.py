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
    comments = models.TextField(max_length=250, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Appointments'
        ordering: ['date', 'time']
