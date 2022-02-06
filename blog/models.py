from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver

from .utils import slug_generator


# Create your models here.
class Blog(models.Model):
    wallpaper = models.ImageField(upload_to='blog/wallpapers')
    user_image = models.ImageField(upload_to='blog/users')
    by = models.CharField(max_length=100)
    title = models.CharField(max_length=250, unique=True)
    slug = models.SlugField(max_length=250, blank=True, null=True, db_index=True)
    date = models.DateField(db_index=True)
    hook = models.CharField(max_length=500)
    main_image = models.ImageField(upload_to='blog/main', blank=True, null=True)
    video_link = models.URLField(max_length=300, blank=True, null=True)
    main_paragraph = models.TextField()
    conclusion = models.TextField(blank=True, null=True)

    def __str__(self):
        return f'{self.title}, by: {self.by}'

    class Meta:
        ordering = ['-date']


class BlogSections(models.Model):
    blog = models.ForeignKey(Blog, related_name='sections', on_delete=models.CASCADE)
    subtitle = models.CharField(max_length=300, blank=True, null=True)
    paragraph = models.TextField(blank=True, null=True)
    photo = models.ImageField(upload_to='blog/sections', blank=True, null=True)
    photo_alt = models.CharField(max_length=50, blank=True, null=True)


@receiver(pre_save, sender=Blog)
def pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = slug_generator(instance)
