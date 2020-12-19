import graphene
from datetime import datetime
from graphene_django import DjangoObjectType, DjangoListField
from django.db.models import Avg, Max, Min

from . import models


class CampusType(DjangoObjectType):
    class Meta:
        model = models.Campus


class CourseType(DjangoObjectType):
    class Meta:
        model = models.Course


class DepartmentType(DjangoObjectType):
    class Meta:
        model = models.Department


class TeacherType(DjangoObjectType):
    class Meta:
        model = models.Teacher


class StudentType(DjangoObjectType):
    class Meta:
        model = models.Student


class RegistrationType(DjangoObjectType):
    class Meta:
        model = models.Registration


class MessageType(DjangoObjectType):
    class Meta:
        model = models.Message


class MarkType(DjangoObjectType):
    class Meta:
        model = models.Mark


class AttendanceType(DjangoObjectType):
    class Meta:
        model = models.Attendance


class AttendanceStats(graphene.ObjectType):
    attended = graphene.Int()
    total = graphene.Int()


class ClassType(DjangoObjectType):
    class Meta:
        model = models.Class

    attendance = graphene.List(AttendanceType, student_id=graphene.Int())
    attendance_stats = graphene.Field(AttendanceStats, student_id=graphene.Int())

    def resolve_attendance(self, info, student_id):
        return self.registration_set.get(student_id=student_id).attendance_set.all()

    def resolve_attendance_stats(self, info, student_id):
        total = 0
        attended = 0
        attendance_set = self.registration_set.get(
            student_id=student_id
        ).attendance_set.all()
        for attendance in attendance_set:
            total = total + 1
            attended = attended + (1 if attendance.attended else 0)
        return AttendanceStats(attended, total)


class MarkedItemType(DjangoObjectType):

    avg = graphene.Float()
    min = graphene.Float()
    max = graphene.Float()
    mark = graphene.Field(MarkType, student_id=graphene.Int())

    class Meta:
        model = models.MarkedItem

    def resolve_avg(self, info):
        avg = self.mark_set.all().aggregate(Avg("mark"))
        return list(avg.values())[0]

    def resolve_min(self, info):
        min = self.mark_set.all().aggregate(Min("mark"))
        return list(min.values())[0]

    def resolve_max(self, info):
        max = self.mark_set.all().aggregate(Max("mark"))
        return list(max.values())[0]

    def resolve_mark(self, info, student_id):

        mark = self.mark_set.filter(student_id=student_id).first()
        return mark


class Query(object):

    campuses = DjangoListField(CampusType)
    campus = graphene.Field(CampusType, name=graphene.String())

    courses = DjangoListField(CourseType)
    course = graphene.Field(CourseType, code=graphene.String())

    departments = DjangoListField(DepartmentType)

    students = DjangoListField(StudentType)
    student = graphene.Field(
        StudentType,
        batch=graphene.Int(),
        roll_number=graphene.Int(),
        campus=graphene.String(),
    )

    class_q = graphene.Field(ClassType, id=graphene.Int())

    def resolve_campus(self, info, name="Karachi"):
        return models.Campus.objects.get(name=name) if name is not None else None

    def resolve_course(self, info, code):
        return models.Course.objects.get(code=code) if code is not None else None

    def resolve_student(self, info, batch, roll_number, campus="Karachi"):
        return (
            models.Student.objects.get(
                batch=batch,
                roll_number=roll_number,
                program_id__department_id__campus_id=campus,
            )
            if batch is not None and roll_number is not None and campus is not None
            else None
        )

    def resolve_class_q(self, info, id=1):
        return models.Class.objects.get(id=id) if id is not None else None

    # def resolve_department(self, info, id):
    #     return models.Campus.objects.get(id=id) if id is not None else None

