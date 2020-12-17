import graphene


from graphene import ObjectType
from graphene_django import DjangoObjectType
from graphene_django.debug import DjangoDebug
from . import models
from . import queryTypes


class Query2(queryTypes.Query, ObjectType):
    hello = graphene.String(name=graphene.String(default_value="world"))

    def resolve_hello(self, info, name):
        return f" {name}"


# class StudentType(DjangoObjectType):
#     class Meta:
#         model = models.Student


# class CourseType(DjangoObjectType):
#     class Meta:
#         model = models.Course


# class CampusType(DjangoObjectType):
#     class Meta:
#         model = models.Campus


# class DepartmentType(DjangoObjectType):
#     class Meta:
#         model = models.Department


# class DegreeProgramType(DjangoObjectType):
#     class Meta:
#         model = models.Department


# class SemesterType(DjangoObjectType):
#     class Meta:
#         model = models.Semester


# class TeacherType(DjangoObjectType):
#     class Meta:
#         model = models.Teacher


# class ClassType(DjangoObjectType):
#     class Meta:
#         model = models.Class


# class ClassTakenType(DjangoObjectType):
#     class Meta:
#         model = models.ClassTaken


# class AttendanceType(DjangoObjectType):
#     class Meta:
#         model = models.Attendance


# class MessageType(DjangoObjectType):
#     class Meta:
#         model = models.Message


# class ResourceType(DjangoObjectType):
#     class Meta:
#         model = models.Resource


# class Mutations(graphene.ObjectType):
#     pass


# class Query(graphene.ObjectType):

#     all_students = graphene.List(StudentType)
#     all_courses = graphene.List(CourseType)
#     all_campus = graphene.List(CampusType)
#     all_departments = graphene.List(DepartmentType)
#     all_degree_programs = graphene.List(DegreeProgramType)
#     all_semesters = graphene.List(SemesterType)
#     all_teachers = graphene.List(TeacherType)
#     all_classes = graphene.List(ClassType)
#     all_classes_taken = graphene.List(ClassTakenType)
#     all_attendance = graphene.List(AttendanceType)
#     all_messages = graphene.List(MessageType)
#     all_resources = graphene.List(ResourceType)

#     def resolve_all_students(self, *args):
#         return models.Student.objects.all()

#     def resolve_all_courses(self, *args):
#         return models.Courses.objects.all()

#     def resolve_all_campus(self, *args):
#         return models.Campus.objects.all()

#     def resolve_all_departments(self, *args):
#         return models.Department.objects.all()

#     def resolve_all_degree_programs(self, *args):
#         return models.Degree_Program.objects.all()

#     def resolve_all_semesters(self, *args):
#         return models.Semester.objects.all()

#     def resolve_all_teachers(self, *args):
#         return models.Teacher.objects.all()

#     def resolve_all_classes(self, *args):
#         return models.Class.objects.all()

#     def resolve_all_classes_taken(self, *args):
#         return models.ClassTaken.objects.all()

#     def resolve_all_attendance(self, *args):
#         return models.Attendance.objects.all()

#     def resolve_all_messages(self, *args):
#         return models.Message.objects.all()

#     def resolve_all_resources(self, *args):
#         return models.Resource.objects.all()

#     debug = graphene.Field(DjangoDebug, name="_debug")


schema = graphene.Schema(query=Query2)

