# Generated by Django 3.1.3 on 2021-01-17 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0011_auto_20210117_0232'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='rates',
            field=models.TextField(default='', max_length=2000),
        ),
    ]
