# Generated by Django 4.0.2 on 2022-02-05 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='blog',
            options={'ordering': ['-date']},
        ),
        migrations.AlterField(
            model_name='blog',
            name='date',
            field=models.DateField(db_index=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to='blog/main'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='user_image',
            field=models.ImageField(upload_to='blog/users'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='wallpaper',
            field=models.ImageField(upload_to='blog/wallpapers'),
        ),
        migrations.AlterField(
            model_name='blogsections',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='blog/sections'),
        ),
    ]
