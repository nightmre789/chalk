from django.db import models
from django_extensions.db.models import TimeStampedModel ,AutoSlugField

class Campus(TimeStampedModel):
    id = models.AutoField(unique=True,primary_key=True)
    name = models.TextField(max_length=20)

class Department(TimeStampedModel):
    dep_id = models.AutoField(unique=True)
    campus_id = models.ForeignKey(Campus,on_delete=models.CASCADE)
