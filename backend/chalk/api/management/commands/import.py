import csv
from django.core.management.base import BaseCommand
from django.db.models import Avg, Max, Min
from ... import models
from faker import Faker
from random import seed, randint

fake = Faker()


class Command(BaseCommand):
    def handle(self, *args, **options):
        # Faker.seed(420)
        # seed(420)
        # # campus
        # with open("chalk/data/campus.csv", "r", newline="") as file:
        #     reader = csv.reader(file, delimiter=",")
        #     next(reader)
        #     for row in reader:
        #         models.Campus.objects.get_or_create(name=row[0])

        # # course
        # with open("chalk/data/course.csv", "r", newline="") as file:
        #     reader = csv.reader(file, delimiter=",")
        #     next(reader)
        #     for row in reader:
        #         models.Course.objects.get_or_create(
        #             code=row[0], name=row[1], credit_hours=row[2], description=row[3],
        #         )

        # # department
        # with open("chalk/data/department.csv", "r", newline="") as file:
        #     reader = csv.reader(file, delimiter=",")
        #     next(reader)
        #     for row in reader:
        #         models.Department.objects.get_or_create(
        #             campus_id=models.Campus.objects.get(name=row[0]), name=row[1]
        #         )

        # # semester
        # with open("chalk/data/semester.csv", "r", newline="") as file:
        #     reader = csv.reader(file, delimiter=",")
        #     next(reader)
        #     for row in reader:
        #         models.Semester.objects.get_or_create(
        #             campus_id=models.Campus.objects.get(name=row[0]), name=row[1]
        #         )

        # # program
        # with open("chalk/data/program.csv", "r", newline="") as file:
        #     reader = csv.reader(file, delimiter=",")
        #     next(reader)
        #     for row in reader:
        #         models.Program.objects.get_or_create(
        #             department_id=models.Department.objects.get(
        #                 campus_id=models.Campus.objects.get(name=row[0]), name=row[1]
        #             ),
        #             name=row[2],
        #             abbr=row[3],
        #         )

        # # teacher
        # departments = models.Department.objects.all()
        # for department in departments:
        #     i = randint(10, 25)
        #     for _ in range(i):
        #         models.Teacher.objects.get_or_create(
        #             department_id = department,
        #             first_name = fake.first_name(),
        #             last_name = fake.last_name()
        #         )

        # # student
        # batches = [2017, 2018, 2019, 2020]
        # sections = ["A", "B", "C", "D", "E", "F"]
        # programs = models.Program.objects.all()

        # for batch in batches:
        #     roll = 0
        #     for program in programs:
        #         program_type = program.name[:1]
        #         sec_number = (
        #             3 if program_type == "M" else 1 if program_type == "P" else 6
        #         )
        #         for section in sections[:sec_number]:
        #             students = (
        #                 randint(30, 40)
        #                 if sec_number == 8
        #                 else randint(15, 20)
        #                 if sec_number == 4
        #                 else randint(5, 10)
        #             )
        #             for _ in range(students):
        #                 roll = roll + 1
        #                 models.Student.objects.get_or_create(
        #                     program_id=program,
        #                     roll_number=roll,
        #                     first_name=fake.first_name(),
        #                     last_name=fake.last_name(),
        #                     section=section,
        #                     batch=batch,
        #                 )
    
