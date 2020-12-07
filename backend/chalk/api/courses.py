from django.db import models
from django_extensions.db.models import TimeStampedModel ,AutoSlugField

class courses(TimeStampedModel):
    name = models.CharField(max_length=20)
    code = models.CharField(max_length=10,unique=True)
    


