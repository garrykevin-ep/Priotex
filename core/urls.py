from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^add$',views.add),
	url(r'^done$',views.done),
	url(r'^delete$',views.delete),	
	url(r'^',views.home),
]