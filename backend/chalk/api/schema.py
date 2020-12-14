import graphene
from graphene_django import DjangoObjectType
from . import models


class StudentType(DjangoObjectType):
    class Meta:
        model = models.Student
        fields = ("student_id", "name", "date_of_birth", "cnic")


class CoursesType(DjangoObjectType):
    class Meta:
        model = models.Courses
        fields = ("id", "name", "code", "credit_hours", "description", "semester_id")


class CampusType(DjangoObjectType):
    class Meta:
        model = models.Campus
        fields = ("campus_id", "name", "department", "semester")


class DepartmentType(DjangoObjectType):
    class Meta:
        model = models.Department
        fields = ("dep_id", "campus", "students", "degree_program", "teacher")


class DegreeProgramType(DjangoObjectType):
    class Meta:
        model = models.Department
        fields = ("deg_id", "degree_name", "dep_id", "student_id")


class SemesterType(DjangoObjectType):
    class Meta:
        model = models.Semester
        fields = ("sem_id", "campus_id", "name")


class TeacherType(DjangoObjectType):
    class Meta:
        model = models.Teacher
        fields = ("teacher_id", "dep_id", "name")


class ClassType(DjangoObjectType):
    class Meta:
        model = models.Class
        fields = ("class_id", "teacher_id", "course_code", "students")


class ClassTakenType(DjangoObjectType):
    class Meta:
        model = models.ClassTaken
        fields = ("student_id", "class_id", "marks", "feedback")


class AttendanceType(DjangoObjectType):
    class Meta:
        model = models.Attendance
        fields = ("class_id", "teacher_id", "student_id", "date", "attendance")


class MessageType(DjangoObjectType):
    class Meta:
        model = models.Message
        fields = ("msg_id", "class_id", "content")


class ResourceType(DjangoObjectType):
    class Meta:
        model = models.Resource
        fields = ("res_id", "class_id", "content", "title")


class Query(graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
