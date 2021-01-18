from django.db import models
from apps.authapp.models import User


# Create your models here.
class Chat(models.Model):
    room = models.CharField(max_length=40)
    time = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    is_client = models.BooleanField(default=True)
    message = models.CharField(max_length=300)
    user_info = models.CharField(max_length=100, null=True, blank=True, default='')

    def __str__(self):
        return f'(room {self.room}, time {self.time}, user {self.user}): {self.message}'


class Rooms(models.Model):
    room = models.CharField(max_length=40)


class Messages(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    email = models.EmailField()
    message = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
