from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import  re_path
# from app import views
# app_name = 'app'
urlpatterns = [
    path('', views.home, name='home'),
    path('about',views.about, name="about"),
    path('track/' , views.track_shipment, name='track'),
    path('services/', views.services, name='services'),
    path('blog/', views.blog, name='blog'),
    path('contact/', views.contact, name='contact'),
    path('getrates/', views.dhl_rates_view, name='dhl_rates_view')




]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
