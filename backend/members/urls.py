from django.urls import path,include

urlpatterns = [
    path('api/', include('members.api.urls')),
]