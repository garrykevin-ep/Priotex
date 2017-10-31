from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
# Create your views here.
from .models import *
import datetime

def home(request):
	full_list = Todo.objects.all()
	today,week,month = [],[],[]
	for x in full_list:
		if x.kind == 'today':
			if x.date.date() == datetime.datetime.now().date():
				today.append(x)
		elif x.kind == 'week':
			if x.date.isocalendar()[1] == datetime.datetime.now().isocalendar()[1]:
				week.append(x)
		elif x.kind == 'month':
			if x.date.month == datetime.datetime.now().month:
				month.append(x)
	print today,week,month
	return render(request , 'core/home.html',{"today" : today , "week" : week , "month" : month})

def add(request):
	job = request.GET['job']
	kind = request.GET['kind']
	item = Todo.objects.create(job=job,kind = kind)
	item.save()
	return JsonResponse({"status" : "ok" , "id" : item.id})

def done(request):
	item = Todo.objects.get(id=request.GET['id'])
	item.done = request.GET['done']
	item.save()
	return JsonResponse({"status" : "ok"})

def delete(request):
	item = Todo.objects.get(id = request.GET['id'])
	item.delete()
	return JsonResponse({"status" : "ok"})