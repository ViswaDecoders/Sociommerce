from rest_framework import generics,status
from .serializers import UserSerializer, CreateUserForm
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.forms import UserCreationForm


class login_user(APIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def post(self, request, format=None):
        # if not self.request.session.exists(self.request.session.session_key):
        #     self.request.session.create()
        print("Request : ",end="")
        print(request.data)
        serializer = self.serializer_class(data=request.data)
        # if serializer.is_valid():
        print("Entered here")
        print(request.data)
        email = request.data['email']
        password = request.data['password']
        query_set = User.objects.filter(email=email)
        # print([user.username for user in query_set])
        if(len(query_set)!=0):
            username = query_set[0].username
            print(query_set[0].username)
        else:
            username = None
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'name':query_set[0].username, 'email':email})
        else:
            return Response({None})
        # else:
        #     print("XXXXXXXXXXXXXXXXXXXXXXXXXX dead XXXXXXXXXXXXXXXXxx")
        #     print(serializer.errors)
        #     return Response({'login':serializer.data['username']})
        
    def get(self, request):
        return Response({'Allowed':'POST'})

class register_user(APIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        username = request.data['username']
        email = request.data['email']
        password = request.data['password']
        user = User.objects.create_user(username, email, password)
        user.save()
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'name': username, 'email': email})
        else:
            return Response({None})
        # form = CreateUserForm(request.POST)
 
        # if form.is_valid():
        #     form.save()
        #     email = form.cleaned_data['email']
        #     username = form.cleaned_data['username']
        #     password = form.cleaned_data['password']
        #     user = authenticate(username=username, password=password)
        #     # t = User.objects.get(id=1)
        #     # t.value = 999 
        #     # t.save() 
        #     login(request, user)
        #     return Response({'registration':'successful'})
        # else:
        #     return Response({'registration':'unsuccessful, Invalid form data'})

class logout_user(APIView):
    def get(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            return Response({'logout':'you are not logged in'})
        else:
            logout(request)
            return Response({'logout':'successful'})
