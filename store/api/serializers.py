from rest_framework import serializers
from store.models import Product, Customer, Profile, Post

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','title','slug','description',"unit_price","inventory","last_update","collection","product_img")

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','profile','img','posted_on')

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('first_name','last_name','email',"phone","birth_date","membership")

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('customer','name','picture')
