"""
ASGI config for config project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""

# import os
#
# from django.core.asgi import get_asgi_application
#
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
#
# application = get_asgi_application()

## for daphne
import os
import config.asgi

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
channel_layer = config.asgi.get_channel_layer()