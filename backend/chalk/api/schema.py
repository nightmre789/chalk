import graphene
from graphene_django import DjangoObjectType
from graphene_django.debug import DjangoDebug
from graphene_django.filter.fields import DjangoFilterConnectionField

from . import models


class StudentType(DjangoObjectType):
    class Meta:
        model = models.Student

class CoursesType(DjangoObjectType):
    class Meta:
        model = models.Courses

class CampusType(DjangoObjectType):
    class Meta:
        model = models.Campus

class DepartmentType(DjangoObjectType):
    class Meta:
        model = models.Department

class DegreeProgramType(DjangoObjectType):
    class Meta:
        model = models.Department

class SemesterType(DjangoObjectType):
    class Meta:
        model = models.Semester

class TeacherType(DjangoObjectType):
    class Meta:
        model = models.Teacher

class ClassType(DjangoObjectType):
    class Meta:
        model = models.Class

class ClassTakenType(DjangoObjectType):
    class Meta:
        model = models.ClassTaken

class AttendanceType(DjangoObjectType):
    class Meta:
        model = models.Attendance

class MessageType(DjangoObjectType):
    class Meta:
        model = models.Message

class ResourceType(DjangoObjectType):
    class Meta:
        model = models.Resource


class Mutations(graphene.ObjectType):
    pass


class Query(graphene.ObjectType):
    
    all_students = DjangoFilterConnectionField(StudentType)
    all_courses = DjangoFilterConnectionField(CoursesType)
    all_campus = DjangoFilterConnectionField(CampusType)
    all_departments = DjangoFilterConnectionField(DepartmentType)
    all_degree_programs = DjangoFilterConnectionField(DegreeProgramType)
    all_semesters = DjangoFilterConnectionField(SemesterType)
    all_teachers = DjangoFilterConnectionField(TeacherType)
    all_classes = DjangoFilterConnectionField(ClassType) 
    all_classes_taken = DjangoFilterConnectionField(ClassTakenType)
    all_attendance = DjangoFilterConnectionField(AttendanceType)
    all_messages = DjangoFilterConnectionField(MessageType)
    all_resources = DjangoFilterConnectionField(ResourceType)

    def resolve_all_students(self,*args):
        return models.Student.objects.all()

    def resolve_all_courses(self,*args):
        return models.Courses.objects.all()

    def resolve_all_campus(self,*args):
        return models.Campus.objects.all()
    
    def resolve_all_departments(self,*args):
        return models.Department.objects.all()
    
    def resolve_all_degree_programs(self,*args):
        return models.Degree_Program.objects.all()
    
    def resolve_all_semesters(self,*args):
        return models.Semester.objects.all()
    
    def resolve_all_teachers(self,*args):
        return models.Teacher.objects.all()
    
    def resolve_all_classes(self,*args):
        return models.Class.objects.all()
    
    def resolve_all_classes_taken(self,*args):
        return models.ClassTaken.objects.all()
    
    def resolve_all_attendance(self,*args):
        return models.Attendance.objects.all()
    
    def resolve_all_messages(self,*args):
        return models.Message.objects.all()
    
    def resolve_all_resources(self,*args):
        return models.Resource.objects.all()
    
    
    debug = graphene.Field(DjangoDebug, name='_debug')

schema = graphene.Schema(query=Query)

