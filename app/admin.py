from django.contrib import admin
from .models import Our_team,service,testimony,about_company

# Register your models here.
@admin.register(service)
class service(admin.ModelAdmin):
    list_display=['service_name','service_description','service_icon']


@admin.register(about_company)
class about_us(admin.ModelAdmin):
    list_display=['title','description','image']

@admin.register(Our_team)
class about_members(admin.ModelAdmin):
    list_display=['Name','Role','image']

@admin.register(testimony)
class about_members(admin.ModelAdmin):
    list_display=['name','comments','image']