from django.db import models

# Create your models here.

class User(models.Model):
    full_name = models.CharField(max_length=250)
    email = models.EmailField(unique=True)
    user_name = models.CharField(max_length=50,unique=True)
    phone_number = models.CharField(max_length=12)
    present_address = models.TextField()
    permanent_address = models.TextField()
    nid_number = models.CharField(max_length=12,unique=True)