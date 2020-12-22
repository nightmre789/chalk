from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from django.urls import path
from graphene_django.views import GraphQLView

admin.site.site_header = "Chalk Admin"
admin.site.site_title = "Chalk Admin Portal"
admin.site.index_title = "Welcome to Chalk Admin Portal"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
