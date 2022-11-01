# Generated by Django 3.1.3 on 2020-11-20 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('S', 'Single'), ('M', 'Multiple')], default='S', max_length=1)),
                ('sequence', models.IntegerField(blank=True, choices=[(None, 'Single Session'), (1, '1st Session'), (2, '2nd Session'), (3, '3rd Session'), (4, '4th Session')], default=None, null=True)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=14)),
                ('comments', models.TextField(blank=True, max_length=250, null=True)),
            ],
            options={
                'verbose_name_plural': 'Appointments',
            },
        ),
        migrations.CreateModel(
            name='AvailableDays',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('effective_date', models.DateField()),
                ('saturday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('sunday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('monday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('tuesday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('wednesday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('thursday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('friday', models.BooleanField(choices=[(True, 'Yes'), (False, 'No')], default=False)),
                ('open_time', models.TimeField()),
                ('close_time', models.TimeField()),
            ],
            options={
                'verbose_name_plural': 'Available Days',
            },
        ),
    ]