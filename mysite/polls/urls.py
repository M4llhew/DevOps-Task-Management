from django.urls import path
from django.contrib.auth.views import LoginView


from . import views

urlpatterns = [
    path('', LoginView.as_view(
            template_name = 'templates/polls/index.html',
            redirect_authenticated_user = True),
         name="login"),
]