from django.contrib import admin
from . import models


@admin.register(models.Campus)
class CampusAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Course)
class CourseAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Department)
class DepartmentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Semester)
class SemesterAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Program)
class ProgramAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Teacher)
class TeacherAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Student)
class StudentAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Class)
class ClassAdmin(admin.ModelAdmin):
    pass

@admin.register(models.Section)
class SectionAdmin(admin.ModelAdmin):
    pass


