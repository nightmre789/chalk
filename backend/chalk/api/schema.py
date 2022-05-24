import graphene
import graphql_jwt

from graphene import ObjectType

from . import models
from . import queries
from . import mutations
from .users import schema as userSchema


class Query(userSchema.Query, queries.Query, ObjectType):
    pass


class Mutation(userSchema.Mutation, mutations.Mutation, ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
