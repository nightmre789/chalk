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


class SemesterType(DjangoObjectType):
    class Meta:
        model = models.Semester


class Query(object):

    campuses = DjangoListField(CampusType)
    campus = graphene.Field(CampusType, name=graphene.String())

    courses = DjangoListField(CourseType)
    course = graphene.Field(CourseType, code=graphene.String())

    departments = DjangoListField(DepartmentType)

    students = DjangoListField(StudentType)
    student = graphene.Field(
        StudentType,
        id=graphene.Int(required=False),
        roll_number=graphene.String(required=False),
    )

    teacher = graphene.Field(TeacherType, id=graphene.Int(), username=graphene.String())

    class_q = graphene.Field(ClassType, id=graphene.Int())
    classes = DjangoListField(ClassType)

    def resolve_campus(self, info, name="Karachi"):
        return models.Campus.objects.get(name=name) if name is not None else None

    def resolve_course(self, info, code):
        return models.Course.objects.get(code=code) if code is not None else None

    def resolve_teacher(self, info, id, username):
        name = username.split(".")
        first_name = last_name = ""
        if id is -1:
            first_name = name[0].capitalize()
            last_name = name[1].capitalize()

        return (
            models.Teacher.objects.get(id=id)
            if id is not -1
            else models.Teacher.objects.get(first_name=first_name, last_name=last_name)
        )

    def resolve_student(self, info, id, roll_number):
        campus = ""
        if id is -1:
            c = roll_number[2]
            campus = (
                "Karachi"
                if (c == "k" or c == "K")
                else "Islamabad"
                if (c == "I" or c == "i")
                else "Faisalabad"
                if (c == "F" or c == "f")
                else "Peshawar"
                if (c == "P" or c == "p")
                else "Lahore"
            )
        return (
            models.Student.objects.get(id=id)
            if id is not -1
            else models.Student.objects.get(
                batch=2000 + int(roll_number[:2]),
                roll_number=int(roll_number[3:]),
                program_id__department_id__campus_id=campus,
            )
        )

    def resolve_class_q(self, info, id=1):
        return models.Class.objects.get(id=id) if id is not None else None

    # def resolve_department(self, info, id):
    #     return models.Campus.objects.get(id=id) if id is not None else None

