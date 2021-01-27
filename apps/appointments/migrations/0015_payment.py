# Generated by Django 3.1.3 on 2021-01-27 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointments', '0014_delete_payment'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tran_ref', models.CharField(max_length=20)),
                ('cart_id', models.CharField(max_length=20)),
                ('cart_description', models.CharField(max_length=50)),
                ('tran_currency', models.CharField(max_length=3)),
                ('tran_total', models.DecimalField(decimal_places=2, max_digits=12)),
                ('email', models.EmailField(max_length=254)),
                ('response_status', models.CharField(max_length=5)),
                ('response_message', models.CharField(max_length=100)),
                ('transaction_time', models.DateTimeField()),
                ('card_type', models.CharField(max_length=20)),
                ('card_scheme', models.CharField(max_length=20)),
                ('payment_description', models.CharField(max_length=30)),
                ('expiryMonth', models.PositiveSmallIntegerField()),
                ('expiryYear', models.PositiveIntegerField()),
            ],
        ),
    ]
