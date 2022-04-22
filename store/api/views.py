from rest_framework.generics import ListAPIView, RetrieveAPIView
from store.models import Product, Post, Profile, Customer
from .serializers import ProductSerializer

class ProductListView(ListAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailView(RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class = ProductSerializer
