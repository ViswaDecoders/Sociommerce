from rest_framework import serializers
from store.models import Product, Customer, Profile, Post

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('title','slug','description',"unit_price","inventory","last_update","collection","promotions","product_img")
