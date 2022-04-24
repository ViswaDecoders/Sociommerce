from rest_framework import generics,status

from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm


class login_user(APIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            username = serializer.data.username
            password = serializer.data.password
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return Response({'login':'successful'})
            else:
                return Response({'login':'unsuccessful'})
        
    def get(self, request):
        return Response({'Allowed':'POST'})

class register_user(APIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        form = UserCreationForm(request.POST)
        
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)
            login(request, user)
            return Response({'Registration':'successful'})
        else:
            return Response({'Registration':'unsuccessful, Invalid Form data'})

class logout_user(APIView):
    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            return Response({'logout':'you are not logged in'})
        else:
            logout(request)
            return Response({'logout':'successful'})
