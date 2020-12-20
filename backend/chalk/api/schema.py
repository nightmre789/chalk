import graphene

from graphene import ObjectType
from graphene_django import DjangoObjectType
from graphene_django.debug import DjangoDebug
from . import models
from . import queries
from . import mutations


class Query(queries.Query, ObjectType):
    pass


class Mutation(mutations.Mutation, ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)

