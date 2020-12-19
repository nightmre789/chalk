from django.db import models
from django import forms
from django.conf import settings


class Campus(models.Model):
    name = models.TextField(max_length=20, primary_key=True)

    def __str__(self):
        return f"{self.name} Campus"


class Course(models.Model):
    code = models.CharField(max_length=5)
    name = models.CharField(max_length=50)
    credit_hours = models.PositiveSmallIntegerField()
    description = models.CharField(max_length=500)
    teachers = models.ManyToManyField("Teacher", through="Class")

    def __str__(self):
        return f"{self.code} {self.name}"


class Department(models.Model):
    campus_id = models.ForeignKey(Campus, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    class Meta:
        models.UniqueConstraint(
            fields=["campus_id", "name"], name="unique department name"
        )

    def __str__(self):
        return f"Department of {self.name}, {self.campus_id.name}"


class Semester(models.Model):
    campus_id = models.ForeignKey(Campus, on_delete=models.CASCADE)
    name = models.CharField(max_length=6)

    class Meta:
        models.UniqueConstraint(
            fields=["campus_id", "name"], name="unique semester name"
        )

    def __str__(self):
        name = self.name[:2]
        return f"{'Fall/Winter' if name == 'FW' else 'Spring' if name == 'SP' else 'Summer'} {self.name[2:]} {self.campus_id.name}"


class Admin(models.Model):
    campus_id = models.ForeignKey(Campus, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)


class Program(models.Model):
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    abbr = models.CharField(max_length=20)

    class Meta:
        models.UniqueConstraint(fields=["dept_id", "name"], name="unique program name")

    def __str__(self):
        return f"{self.abbr} {self.department_id.campus_id.name}"


class Teacher(models.Model):
    department_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Student(models.Model):
    program_id = models.ForeignKey(Program, on_delete=models.CASCADE)
    roll_number = models.PositiveSmallIntegerField()
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    section = models.CharField(max_length=1)
    batch = models.PositiveSmallIntegerField()

    class Meta:
        models.UniqueConstraint(
            fields=["batch", "roll_number", "program_id__department_id__campus_id"],
            name="roll number",
        )

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Class(models.Model):
    teacher_id = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    course_id = models.ForeignKey(Course, on_delete=models.CASCADE)
    semester_id = models.ForeignKey(Semester, on_delete=models.CASCADE)
    section_name = models.CharField(max_length=10)
    sessions = models.PositiveSmallIntegerField(default=0)
    students = models.ManyToManyField(Student, through="Registration")

    class Meta:
        models.UniqueConstraint(
            fields=["teacher_id", "course_id", "semester_id"],
            name="unique class per teacher per semester",
        )

    def __str__(self):
        return f"{self.course_id.name} {self.section_name}"


class Section(models.Model):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    section = models.CharField(max_length=2)

    class Meta:
        models.UniqueConstraint(fields=["class_id", "section"], name="class section")

    def __str__(self):
        return f"{self.class_id.course_id.name} {self.section}"


class Registration(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    marks = models.PositiveSmallIntegerField(default=0)
    feedback = models.TextField(max_length=250, blank=True)

    class Meta:
        models.UniqueConstraint(
            fields=["student_id", "class_id"], name="unique student per class"
        )

    def __str__(self):
        return f"{self.student_id.roll_number} {self.student_id.first_name} {self.class_id.course_id.code} {self.class_id.section_name}"


class Message(models.Model):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField(max_length=2000)
    sent = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"


class Resource(models.Model):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    content = models.FileField()
    title = models.CharField(max_length=50)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"


class Attendance(models.Model):
    registration_id = models.ForeignKey(Registration, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    attended = models.BooleanField(default=False)

    class Meta:
        models.UniqueConstraint(
            fields=["registration_id", "date"], name="unique attendance per date"
        )

    def __str__(self):
        return f"{self.registration_id.student_id.name} {self.registration_id.class_id.course_id.code} {self.date} {'Present' if self.attended else 'Absent'}"


class MarkedItem(models.Model):
    class_id = models.ForeignKey(Class, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    total = models.FloatField()
    weightage = models.FloatField()

    def __str__(self):
        return (
            f"{self.class_id.course_id.code} {self.class_id.section_name} {self.name}"
        )


class Mark(models.Model):
    student_id = models.ForeignKey(Student, on_delete=models.CASCADE)
    item_id = models.ForeignKey(MarkedItem, on_delete=models.CASCADE)
    mark = models.FloatField()
