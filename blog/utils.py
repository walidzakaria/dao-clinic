from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify


def slug_generator(instance):
    slug = slugify(instance.title)
    in_class = instance.__class__
    max_length = in_class._meta.get_field('slug').max_length
    slug = slug[:max_length]
    return slug

