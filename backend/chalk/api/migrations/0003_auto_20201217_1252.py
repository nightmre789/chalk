# Generated by Django 3.1.2 on 2020-12-17 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_class_section_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='registration',
            name='feedback',
            field=models.TextField(blank=True, max_length=250),
        ),
        migrations.AlterField(
            model_name='registration',
            name='marks',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
