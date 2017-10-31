from __future__ import unicode_literals

from django.db import models
import datetime
# Create your models here.


class Todo(models.Model):
	job = models.CharField(max_length=50)
	choice = (
	("today" , "today"),
	("week" , "week"),
	("month" , "month"),
	)
	date = models.DateTimeField(default=datetime.datetime.now())
	kind = models.CharField(choices = choice, max_length=50)
	done = models.BooleanField(default=False)
    