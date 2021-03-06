# Generated by Django 3.1.3 on 2020-11-21 00:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
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
        migrations.CreateModel(
            name='Prices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('effective_date', models.DateField()),
                ('single_session_price', models.DecimalField(decimal_places=2, max_digits=14)),
                ('multi_session_price', models.DecimalField(decimal_places=2, max_digits=14)),
            ],
            options={
                'verbose_name_plural': 'Prices',
            },
        ),
    ]
