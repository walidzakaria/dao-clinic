from django.db import models
from apps.authapp.models import User


# Create your models here.
class Chat(models.Model):
    room = models.CharField(max_length=40)
    time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    message = models.CharField(max_length=300)
