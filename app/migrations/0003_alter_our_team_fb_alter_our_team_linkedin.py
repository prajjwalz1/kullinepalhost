# Generated by Django 4.1.7 on 2023-04-05 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_our_team_fb_our_team_linkedin_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='our_team',
            name='fb',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='our_team',
            name='linkedin',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
