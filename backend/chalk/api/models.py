from django.db import models
from django.conf import settings
from django_extensions.db.models import TimeStampedModel 


class Campus(TimeStampedModel):
    campus_id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=20)

class Student(TimeStampedModel):
    student_id = models.TextField(max_length = 10,primary_key=True)
    name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    cnic = models.IntegerField(unique=True,) 

class Department(TimeStampedModel):
    dep_id = models.AutoField(unique=True)
    campus_id = models.ForeignKey(Campus,on_delete=models.CASCADE)
    students = models.ManyToManyField(Student_Reg, through='Degree_Program') 

class Degree_Program(TimeStampedModel):
    deg_id = models.CharField(max_length=10,primary_key=True)
    degree_name = models.CharField(max_length=100)
    dep_id = models.ForeignKey(Department,on_delete=models.CASCADE)

class Student_Reg(TimeStampedModel):
    student_id = models.ForeignKey(Student,on_delete=models.CASCADE)
    degree_id = models.ForeignKey(Degree_Program,on_delete=models.CASCADE)
    department_id = models.ForeignKey(Department,on_delete=models.CASCADE)

class Semester(TimeStampedModel):
    semester_id = models.CharField(max_length=10,primary_key=True)
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
    semester = models.IntegerField()

class Class(TimeStampedModel):
    class_id = models.TextField(primary_key=True)
    teacher_id = models.ForeignKey(Teacher,on_delete=models.CASCADE)
    course_code = models.ForeignKey(Courses, on_delete=models.CASCADE )

class ClassTaken(TimeStampedModel):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    class_id = models.ForeignKey(Class,on_delete=models.CASCADE)
    marks = models.IntegerField()
    feedback = models.TextField(max_length=250)
    students = models.ManyToManyField(Student_Reg, through='Class Taken')