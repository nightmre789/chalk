from datetime import datetime
import graphene
from graphene_django import DjangoObjectType, DjangoListField

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


class ClassType(DjangoObjectType):
    class Meta:
        model = models.Class


class RegistrationType(DjangoObjectType):
    class Meta:
        model = models.Registration


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

