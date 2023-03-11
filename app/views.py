from django.http import HttpResponse
import requests

def home(request):
    return render(request,'index.html')


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