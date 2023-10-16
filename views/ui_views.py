from netops.controller.util import import_devices
from netops import app
#from netops.__init__ import Device
#from flask import jsonify
#from netops.ping import ping_device


@app.route("/devices")
def hdevices():

    devices = import_devices()
    return {"devices": devices}


# @app.route('/monitor', methods=['GET'])
# def monitor():
#     devices_status = {}
#     with app.app_context():
#         devices = Device.query.all()
#         for device in devices:
#             if device.ip_address and ping_device(device.ip_address):
#                 devices_status[device.name] = 'up'
#             else:
#                 devices_status[device.name] = 'down'
#     return jsonify(devices_status)