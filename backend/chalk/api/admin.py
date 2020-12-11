from django.contrib import admin
from .models import Student
from .models import Courses

# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    pass
@admin.register(Courses)
class CourseAdmin(admin.ModelAdmin):
    pass