from django.db import models
from django import forms
from django.conf import settings
from django_extensions.db.models import TimeStampedModel, AutoSlugField


class Campus(TimeStampedModel):
    campus_id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=20)

class Student(TimeStampedModel):
    student_id = models.TextField(max_length = 10,unique=True,null=True,blank=True)
    name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    cnic = models.IntegerField(unique=True,) 

class Department(TimeStampedModel):
    dep_id = models.AutoField(primary_key=True)
    campus_id = models.ForeignKey(Campus,on_delete=models.CASCADE)
    students = models.ManyToManyField(Student, through='Degree_Program') 

class Degree_Program(TimeStampedModel):
    deg_id = models.AutoField(primary_key=True)
    degree_name = models.CharField(max_length=100)
    dep_id = models.ForeignKey(Department,on_delete=models.CASCADE)
    student_id = models.ForeignKey(Student,on_delete=models.CASCADE)

class Semester(TimeStampedModel):
    sem_id = models.AutoField(primary_key=True)
    campus_id = models.ForeignKey(Campus,on_delete=models.CASCADE)
    name = models.CharField(max_length=10)

class Teacher(TimeStampedModel):
    teacher_id = models.CharField(max_length=50,primary_key=True)
    dep_id = models.ForeignKey(Department,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

class Courses(TimeStampedModel):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=10, primary_key=True)
    credit_hours = models.IntegerField()
    decription = models.CharField(max_length=100)
    semester_id = models.ForeignKey(Semester,on_delete=models.CASCADE,null=True,blank=True)

class Class(TimeStampedModel):
    class_id = models.TextField(primary_key=True)
    teacher_id = models.ForeignKey(Teacher,on_delete=models.CASCADE)
    course_code = models.ForeignKey(Courses, on_delete=models.CASCADE )
    students = models.ManyToManyField(Student, through='ClassTaken')

class ClassTaken(TimeStampedModel):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    class_id = models.ForeignKey(Class,on_delete=models.CASCADE)
    marks = models.IntegerField()
    feedback = models.TextField(max_length=250)
    
class Attendance(TimeStampedModel):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    teacher_id = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    date = models.DateField()
    attendance = models.BooleanField()

class Message(TimeStampedModel):
    msg_id = models.AutoField(primary_key=True)
    class_id = models.ForeignKey(Class,on_delete=models.CASCADE)
    content = models.TextField(max_length=1000)

class Resource(TimeStampedModel):
    res_id = models.AutoField(primary_key=True)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    content = forms.FileField()
    title = forms.CharField(max_length=50)




