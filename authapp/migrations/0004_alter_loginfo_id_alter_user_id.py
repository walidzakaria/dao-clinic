# Generated by Django 4.0.2 on 2022-02-04 23:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authapp', '0003_auto_20210301_2154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loginfo',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]