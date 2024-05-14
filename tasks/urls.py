from django.urls import path
from .views import create_task, HomeView, CalendarView, UpcomingView

urlpatterns = [
    path("create_task/", create_task, name="create-task"),
    path("", HomeView.as_view(), name="home"),
    path("calendar/", CalendarView.as_view(), name="calendar-view"),
    path("upcoming/", UpcomingView.as_view(), name="upcoming-view"),
]