from django.contrib import admin
from .student import Student
from .courses import Courses

# Register your models here.
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    pass
@admin.register(Courses)
class CourseAdmin(admin.ModelAdmin):
    pass