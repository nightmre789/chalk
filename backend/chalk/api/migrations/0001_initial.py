# Generated by Django 3.1.2 on 2020-12-16 22:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Campus',
            fields=[
                ('name', models.TextField(max_length=20, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sessions', models.PositiveSmallIntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('campus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.campus')),
            ],
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('abbr', models.CharField(max_length=20)),
                ('department_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.department')),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('department_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.department')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roll_number', models.PositiveSmallIntegerField()),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('section', models.CharField(max_length=1)),
                ('batch', models.PositiveSmallIntegerField()),
                ('program_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.program')),
            ],
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=6)),
                ('campus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.campus')),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('section', models.CharField(max_length=2)),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.class')),
            ],
        ),
        migrations.CreateModel(
            name='Resource',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.FileField(upload_to='')),
                ('title', models.CharField(max_length=50)),
                ('uploaded', models.DateTimeField(auto_now_add=True)),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.class')),
            ],
        ),
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marks', models.PositiveSmallIntegerField()),
                ('feedback', models.TextField(max_length=250)),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.class')),
                ('student_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.student')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=1000)),
                ('sent', models.DateTimeField(auto_now_add=True)),
                ('class_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.class')),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=5)),
                ('name', models.CharField(max_length=50)),
                ('credit_hours', models.PositiveSmallIntegerField()),
                ('description', models.CharField(max_length=500)),
                ('teachers', models.ManyToManyField(through='api.Class', to='api.Teacher')),
            ],
        ),
        migrations.AddField(
            model_name='class',
            name='course_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.course'),
        ),
        migrations.AddField(
            model_name='class',
            name='semester_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.semester'),
        ),
        migrations.AddField(
            model_name='class',
            name='students',
            field=models.ManyToManyField(through='api.Registration', to='api.Student'),
        ),
        migrations.AddField(
            model_name='class',
            name='teacher_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.teacher'),
        ),
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('attended', models.BooleanField()),
                ('registration_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.registration')),
            ],
        ),
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('campus_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.campus')),
            ],
        ),
    ]
