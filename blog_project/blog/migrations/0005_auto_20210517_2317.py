# Generated by Django 3.2 on 2021-05-17 17:47

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20210517_2316'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='create_time',
        ),
        migrations.AddField(
            model_name='comment',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 5, 17, 17, 47, 43, 939362, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='post',
            name='created_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 5, 17, 17, 47, 43, 939362, tzinfo=utc)),
        ),
    ]