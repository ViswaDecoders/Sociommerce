from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.ProductListView.as_view()),
    path("<pk>", views.ProductDetailView.as_view()),
    path("makePost/", views.makePost.as_view()),
    path("<pk>/updatePost/", views.makePost.as_view()),
    path("makeCustomer/", views.makeCustomer.as_view()),
    path("makeProfile/", views.makeProfile.as_view()),
    path("makePost/", views.makePost.as_view()),
    path("makeProduct/", views.makeProduct.as_view()),
    path("<pk>/updateProduct/", views.updateProduct.as_view()),
    path("deletePost/", views.deletePost),
]