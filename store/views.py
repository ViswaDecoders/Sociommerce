from django.http import FileResponse
from django.shortcuts import render
from rest_framework.generics import CreateAPIView

# Create your views here.
def getPostImage(request, year, month, day, name):
    ImagePath = "uploads/posts/"+year+"/"+month+"/"+day+"/"+name
    img = open(ImagePath, "rb")
    response = FileResponse(img)
    return response

def getProductImage(request, year, month, day, name):
    ImagePath = "uploads/products/"+year+"/"+month+"/"+day+"/"+name
    img = open(ImagePath, "rb")
    response = FileResponse(img)
    return response

