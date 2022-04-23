from django.http import FileResponse
from django.shortcuts import render
from .models import Profile, Post, Customer,Collection, Promotion,Product

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

def makeProduct(request):
    if request.method == "POST":
        title = request.POST['title']
        slug = "-".join(title.split(" "))
        description = request.POST['desc']
        unit_price = request.POST['unit_price']
        inventory = request.POST['inventory']
        collection = Collection.objects.get(title=request.POST['collection'])
        promotions = Promotion.objects.get(id=request.POST['promotion'])
        product_img = request.POST['img']
        prod = Product(title=title, slug=slug, description=description, unit_price=unit_price,inventory=inventory, collection=collection, promotion=promotions, product_img=product_img)
        prod.save()

def deleteProduct(request):
    if request.method == "POST":
        prod = Product(id=request.POST['product_id'])
        prod.delete()

def makePost(request):
    if request.method == "POST":
        profile = Profile.objects.get(name=request.POST['profile_name'])
        img = request.POST['img']
        post = Post(profile=profile,img=img)
        post.save()

def deletePost(request):
    if request.method == "POST":
        post = Post(id=request.POST['profile_id'])
        post.delete()

def makeCustomer(request):
    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        phone = request.POST['phone']
        birth_date = request.POST['b_day']
        cust = Customer(first_name=first_name,last_name=last_name,email=email,phone=phone,birth_date=birth_date)
        cust.save()

def makeProfile(request):
    if request.method == "POST":
        cust = Customer.objects.get(id=request.POST['cust_id'])
        name = request.POST['name']
        pic = request.POST['pic']
        profile = Profile(customer=cust,name=name,picture=pic)
        profile.save()

		