import graphene

from graphene_django import DjangoObjectType
from . import models


class RegistrationType(DjangoObjectType):
    class Meta:
        model = models.Registration


class MessageType(DjangoObjectType):
    class Meta:
        model = models.Message


class Mutation(graphene.ObjectType):
    create_registration = graphene.Field(
        RegistrationType, class_id=graphene.Int(), student_id=graphene.Int()
    )

    def resolve_create_registration(self, info, class_id, student_id):
        c = models.Class.objects.get(id=class_id)
        student = models.Student.objects.get(id=student_id)
        return models.Registration.objects.create(class_id=c, student_id=student)

    create_message = graphene.Field(
        MessageType,
        class_id=graphene.Int(),
        title=graphene.String(),
        content=graphene.String(),
    )

    def resolve_create_message(self, info, class_id, title, content):
        c = models.Class.objects.get(id=class_id)
        return models.Message.objects.create(class_id=c, title=title, content=content)

