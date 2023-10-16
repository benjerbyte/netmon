from flask import jsonify
from netops import app, Device  # replace 'your_flask_app_package' with the name of your Flask app package
from ping import ping_device

@app.route('/monitor', methods=['GET'])
def monitor():
    devices_status = {}
    with app.app_context():
        devices = Device.query.all()
        for device in devices:
            if device.ip_address and ping_device(device.ip_address):
                devices_status[device.name] = 'up'
            else:
                devices_status[device.name] = 'down'
    return jsonify(devices_status)
