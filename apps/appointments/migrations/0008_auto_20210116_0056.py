# Generated by Django 3.1.3 on 2021-01-15 22:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0007_auto_20210116_0016'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='appointments',
            unique_together=set(),
        ),
    ]