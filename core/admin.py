from django.contrib import admin
from .models import *

class TodoAdmin(admin.ModelAdmin):
    '''
        Admin View for Todo
    '''
    list_display = ('job','kind','date','done')
    
   
admin.site.register(Todo, TodoAdmin)
