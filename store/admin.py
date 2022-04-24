from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.Collection)
admin.site.register(models.Product)
# admin.site.register(models.Promotion)
admin.site.register(models.Customer)
admin.site.register(models.Profile)
admin.site.register(models.Post)
