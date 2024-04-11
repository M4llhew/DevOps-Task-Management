from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from constants import MAX_CHAR_LENGTH_SMALL, MAX_CHAR_LENGTH_LARGE


class Task(models.Model):
    task_id = models.AutoField(primary_key = True)
    title = models.TextField(max_length=MAX_CHAR_LENGTH_SMALL)
    description = models.TextField(max_length=MAX_CHAR_LENGTH_LARGE)
    progress = models.CharField(default="T", max_length=MAX_CHAR_LENGTH_SMALL)
    creation_datetime = models.DateField()
    due_datetime = models.DateTimeField()
    created_by = models.TextField()
    assigned_to = models.TextField()
    estimate_time = models.TimeField()

    def __str__(self):
        return self.title