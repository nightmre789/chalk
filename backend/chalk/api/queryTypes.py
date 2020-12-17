from datetime import datetime
from graphene import DateTime, List
from graphene_django import DjangoObjectType

from . import models


class CampusType(DjangoObjectType):
    class Meta:
        model = models.Campus


class Query(object):
    date = DateTime()
    campuses = List(CampusType)

    def resolve_date(self, info):
        return datetime.now()

    def resolve_campuses(self, info):
        return models.Campus.objects.all()
