# Generated by Django 2.1.7 on 2019-02-26 01:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20190226_0124'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='worker',
            name='time_Sheets',
        ),
    ]
