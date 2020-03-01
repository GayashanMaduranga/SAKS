from django.urls import path,include
from registration_app import views

urlpatterns = [
    path('', views.index),
]
