import graphene

from graphene import ObjectType
from graphene_django import DjangoObjectType
from graphene_django.debug import DjangoDebug
from . import models
from . import queryTypes


class Query(queryTypes.Query, ObjectType):
    current_semester = graphene.String()

    def resolve_hello(self, info, name):
        return "FW2020"


schema = graphene.Schema(query=Query)

