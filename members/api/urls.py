from django.urls import path
from . import views

urlpatterns = [
    path("login_user/", views.login_user.as_view()),
    path("logout_user/", views.logout_user.as_view()),
    path("register_user/", views.register_user.as_view()),
]