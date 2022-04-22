from django.urls import path
from . import views

urlpatterns = [
    path("", views.ProductListView.as_view()),
    path("<pk>", views.ProductDetailView.as_view()),
]