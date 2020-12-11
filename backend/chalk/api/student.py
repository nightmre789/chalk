from django.db import models
from django.conf import settings
from course import Course
from django_extensions.db.models import TimeStampedModel ,AutoSlugField

class Student(TimeStampedModel):
    student_id = models.TextField(max_length = 10,primary_key=True)
    name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    cnic = models.IntegerField(unique=True,)

class Class(TimeStampedModel):
    class_id = models.TextField(primary_key=True)
    teacher_id = models.ForeignKey(Teacher,on_delete=CASCADE)
    course_id = models.ForeignKey(Course)


    
