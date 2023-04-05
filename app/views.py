from django.http import HttpResponse
import requests
from .models import service,testimony,about_company,Our_team

def home(request):
    services=service.objects.all()
    testimonies=testimony.objects.all()
    about=about_company.objects.all()
    team=Our_team.objects.all()


    return render(request,'index.html',{'service':services,'testimony':testimonies,'about':about,'team':team})


from django.shortcuts import render
import http.client
import json
from django.http import JsonResponse
import http.client
import requests


def track_shipment(request):
    tracking_number = request.GET.get('tracking_number')
    error_msg = None
    shipments = None

    if tracking_number:
        import http.client
        import urllib.parse
        import json

        params = urllib.parse.urlencode({
            'trackingNumber': tracking_number,
            'service': 'express'
        })

        headers = {
            'Accept': 'application/json',
            'DHL-API-Key': 'BlLTCCq22KQpQuK1dVcxoTW9yu9IKMXO'
        }

        connection = http.client.HTTPSConnection("api-eu.dhl.com")

        connection.request("GET", "/track/shipments?" + params, "", headers)
        response = connection.getresponse()

        status = response.status
        reason = response.reason

        if status == 200:
            data = json.loads(response.read())
            shipments = data['shipments']
        else:
            error_msg = f"Error {status}: {reason}"

    return render(request, 'shipmentdetails.html', {
        'shipments': shipments,
        'error_msg': error_msg,
        'tracking_number': tracking_number
    })
    # connection.close()

def about(request):
        return render(request, "about.html")


def services(request):
    return render(request, "services.html")

def blog(request):
    return render(request, "blog.html")

def contact(request):
    return render(request, "contact.html")


import http.client
from django.http import HttpResponse
from django.views import View
import http.client
import uuid
import http.client
import uuid
from datetime import datetime

# Generate a unique ID for the message reference header
import requests


def dhl_rates_view(request):
    # Get the parameters from the user form
    account_number = request.GET.get('account_number')
    origin_country_code = request.GET.get('origin_country_code')
    origin_city_name = request.GET.get('origin_city_name')
    destination_country_code = request.GET.get('destination_country_code')
    destination_city_name = request.GET.get('destination_city_name')
    weight = request.GET.get('weight')
    length = request.GET.get('length')
    width = request.GET.get('width')
    height = request.GET.get('height')
    planned_shipping_date = request.GET.get('planned_shipping_date')
    is_customs_declarable = request.GET.get('is_customs_declarable')
    unit_of_measurement = request.GET.get('unit_of_measurement')

    # Set up the request parameters
    url = 'https://express.api.dhl.com/mydhlapi/test'
    params = {
        'accountNumber': account_number,
        'originCountryCode': origin_country_code,
        'originCityName': origin_city_name,
        'destinationCountryCode': destination_country_code,
        'destinationCityName': destination_city_name,
        'weight': weight,
        'length': length,
        'width': width,
        'height': height,
        'plannedShippingDate': planned_shipping_date,
        'isCustomsDeclarable': is_customs_declarable,
        'unitOfMeasurement': unit_of_measurement
    }
    print(params)
    message_reference = str(uuid.uuid4())

    # Get the current date in ISO format (YYYY-MM-DD)
    message_reference_date = datetime.today().strftime('%Y-%m-%d')



    headers = {
        'Message-Reference': message_reference,
        'Message-Reference-Date': message_reference_date,
        'Plugin-Name': "rates",
        'Plugin-Version': "1.0",
        'Shipping-System-Platform-Name': "getfromnepal",
        'Shipping-System-Platform-Version': "1",
        'Webstore-Platform-Name': "platform named-index",
        'Webstore-Platform-Version': "platform-version 1.0",
        'DHL-API-Key': 'BlLTCCq22KQpQuK1dVcxoTW9yu9IKMXO'
    }

    # Send the request to the DHL API
    response = requests.get(url, params=params, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        # Return the response to the client
        return response.json()
    else:
        # Return an error message to the client
        print(response.status_code)
        return HttpResponse('Error: Unable to retrieve DHL rates', status=response.status_code)

