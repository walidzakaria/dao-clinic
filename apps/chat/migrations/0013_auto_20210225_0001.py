# Generated by Django 3.1.3 on 2021-02-24 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0012_chat_is_read'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='is_read',
            field=models.BooleanField(default=False),
        ),
    ]
