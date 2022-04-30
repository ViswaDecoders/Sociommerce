from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from rest_framework.views import APIView
from store.models import Product, Post, Profile, Customer
from .serializers import ProductSerializer, CustomerSerializer, PostSerializer, ProfileSerializer
from rest_framework.parsers import MultiPartParser, FormParser

from django.http import JsonResponse
from rest_framework.response import Response
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny


class csrf(APIView):
    def get(self,request):
        k = get_token(request)
        print(k)
        return Response({"csrfToken":k})

class ProductListView(ListAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer


@method_decorator(csrf_exempt, name='dispatch')
class makeProduct(CreateAPIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [AllowAny]
    queryset=Product.objects.all()
    serializer_class = ProductSerializer
    # if request.method == "POST":
    #     title = request.POST['title']
    #     slug = "-".join(title.split(" "))
    #     description = request.POST['desc']
    #     unit_price = request.POST['unit_price']
    #     inventory = request.POST['inventory']
    #     collection = Collection.objects.get(title=request.POST['collection'])
    #     promotions = Promotion.objects.get(id=request.POST['promotion'])
    #     product_img = request.POST['img']
    #     prod = Product(title=title, slug=slug, description=description, unit_price=unit_price,inventory=inventory, collection=collection, promotion=promotions, product_img=product_img)
    #     prod.save()

class updateProduct(UpdateAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer

def deleteProduct(request):
    if request.method == "POST":
        prod = Product(id=request.POST['product_id'])
        prod.delete()

class makePost(CreateAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer
    # if request.method == "POST":
    #     profile = Profile.objects.get(name=request.POST['profile_name'])
    #     img = request.POST['img']
    #     post = Post(profile=profile,img=img)
    #     post.save()

class updatePost(UpdateAPIView):
    queryset=Post.objects.all()
    serializer_class = PostSerializer

def deletePost(request):
    if request.method == "POST":
        post = Post(id=request.POST['profile_id'])
        post.delete()

class makeCustomer(CreateAPIView):
    queryset=Customer.objects.all()
    serializer_class = CustomerSerializer
    # if request.method == "POST":
    #     first_name = request.POST['first_name']
    #     last_name = request.POST['last_name']
    #     email = request.POST['email']
    #     phone = request.POST['phone']
    #     birth_date = request.POST['b_day']
    #     cust = Customer(first_name=first_name,last_name=last_name,email=email,phone=phone,birth_date=birth_date)
    #     cust.save()

class updateCustomer(UpdateAPIView):
    queryset=Customer.objects.all()
    serializer_class = CustomerSerializer

class makeProfile(CreateAPIView):
    queryset=Profile.objects.all()
    serializer_class = ProfileSerializer
    # if request.method == "POST":
    #     cust = Customer.objects.get(id=request.POST['cust_id'])
    #     name = request.POST['name']
    #     pic = request.POST['pic']
    #     profile = Profile(customer=cust,name=name,picture=pic)
    #     profile.save()

		