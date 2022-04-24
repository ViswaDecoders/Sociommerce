from django.urls import path
from . import views


urlpatterns = [
    path('posts/<str:year>/<str:month>/<str:day>/<str:name>', views.getPostImage),
    path('products/<str:year>/<str:month>/<str:day>/<str:name>', views.getProductImage),
]