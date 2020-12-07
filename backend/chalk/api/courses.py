from django.db import models
from django_extensions.db.models import TimeStampedModel ,AutoSlugField

class Courses(TimeStampedModel):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=10,unique=True, primary_key=True)
    credit_hours = models.IntegerField()
    decription = models.CharField(max_length=100)
    semester = models.IntegerField()

    


