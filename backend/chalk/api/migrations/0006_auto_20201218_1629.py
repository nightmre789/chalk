# Generated by Django 3.1.2 on 2020-12-18 21:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20201218_1621'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mark',
            old_name='obtained',
            new_name='mark',
        ),
    ]
