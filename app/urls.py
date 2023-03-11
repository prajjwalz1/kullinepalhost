from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import  re_path
# from app import views
# app_name = 'app'
urlpatterns = [
    path('', views.home, name='home'),
    path('track/' , views.track_shipment, name='track')

]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
