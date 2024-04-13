from django.contrib.auth.forms import UserCreationForm, UserChangeForm, AuthenticationForm
from django.forms import TextInput, EmailInput
from django import forms
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ("email",)
        widgets = {
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'style': 'color: red; border: 1px solid blue;',
            })
        }


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ("email",)


class CustomAuthenticationForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Add custom styling
        self.fields['username'].widget.attrs.update({
            'class': 'primary form-input',
            'placeholder': 'Email'
        })
        self.fields['password'].widget.attrs.update({
            'class': 'primary form-input',
            'placeholder': 'Password'
        })
