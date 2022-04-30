from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username", "password")

class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "email", "password1"]
        # exclude = ['password1','password2']
    
    def __init__(self, *args, **kwargs):
        super(CreateUserForm, self).__init__(*args, **kwargs)
        # for fieldname in ['password2']:
        del self.fields['password2']
        # del self.fields['password1']
        self.fields['password1'].help_text = None
        self.fields['username'].help_text = None

