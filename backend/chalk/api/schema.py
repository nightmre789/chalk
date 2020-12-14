import graphene
from graphene_django import DjangoObjectType
from backend.chalk.api import models

class StudentType(DjangoObjectType):
    class Meta:
        model = Student
        fields = ("student_id","name","date_of_birth","cnic")

class CoursesType(DjangoObjectType):
    class Meta:
        model = Courses
        fields = ("id","name","code","credit_hours","description","semester_id")

class CampusType(DjangoObjectType):
    class Meta:
        model = Campus
        fields = ("campus_id","name","department","semester")

class DepartmentType(DjangoObjectType):
    class Meta:
        model = Department
        fields = ("dep_id","campus","students","degree_program","teacher")

class DegreeProgramType(DjangoObjectType):
    class Meta:
        model = Department
        fields = ("deg_id","degree_name","dep_id","student_id")

class SemesterType(DjangoObjectType):
    class Meta:
        model = Semester
        fields = ("sem_id","campus_id","name")
class TeacherType(DjangoObjectType):
    class Meta:
        model = Teacher
        fields = ("teacher_id","dep_id","name")

class ClassType(DjangoObjectType):
    class Meta:
        model = Class
        fields = ("class_id","teacher_id","course_code","students")
    
class ClassTakenType(DjangoObjectType):
    class Meta:
        model = ClassTaken
        fields = ("student_id","class_id","marks","feedback")

class AttendanceType(DjangoObjectType):
    class Meta:
        model = Attendance
        fields = ("class_id","teacher_id","student_id","date","attendance")

class MessageType(DjangoObjectType):
    class Meta:
        model = Message
        fields = ("msg_id","class_id","content")

class ResourceType(DjangoObjectType):
    class Meta:
        model = Resource   
        fields = ("res_id","class_id","content","title")



class Query(graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
