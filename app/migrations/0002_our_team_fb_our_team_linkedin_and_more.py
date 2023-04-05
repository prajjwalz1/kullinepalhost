# Generated by Django 4.1.7 on 2023-04-05 03:40

import app.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='our_team',
            name='fb',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='our_team',
            name='linkedin',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='service',
            name='service_description',
            field=models.CharField(max_length=255, validators=[app.models.validate_min_length]),
        ),
    ]
