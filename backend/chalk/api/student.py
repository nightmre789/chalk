from django.db import models
from django.conf import settings
from django_extensions.db.models import TimeStampedModel ,AutoSlugField

class Student(TimeStampedModel):
    id = models.TextField(max_length = 10,unique = True,primary_key=True)
    name = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    cnic = models.IntegerField(unique=True,)

    
