from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from . import models


@admin.register(models.CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = (
        "username",
        "email",
        "first_name",
        "last_name",
        "is_staff",
        "is_teacher",
        "is_student",
    )

    fieldsets = (
        (None, {"fields": ("username", "password")}),
        ("Personal info", {"fields": ("first_name", "last_name", "email")}),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
        (
            "Additional info",
            {"fields": ("is_student", "is_teacher", "student_id", "teacher_id")},
        ),
    )

    add_fieldsets = (
        (None, {"fields": ("username", "password1", "password2")}),
        ("Personal info", {"fields": ("first_name", "last_name", "email")}),
        (
            "Permissions",
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        ("Important dates", {"fields": ("last_login", "date_joined")}),
        (
            "Additional info",
            {"fields": ("is_student", "is_teacher")},
        ),
    )


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


@admin.register(models.Registration)
class RegistrationAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Message)
class MessageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.MarkedItem)
class MessageAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Mark)
class MarkAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    pass
