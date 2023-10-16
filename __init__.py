from flask import Flask, jsonify
from flask_cors import CORS


#import yaml

app = Flask(__name__)
CORS(app)

#import netops.views.ui_views

#=======Database=======
from flask_sqlalchemy import SQLAlchemy
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


class Device(db.Model):

       id = db.Column(db.Integer, primary_key=True)
       name = db.Column(db.Text, unique=True, nullable=False)
       ip_address = db.Column(db.Text)
       vendor = db.Column(db.Text)
       os = db.Column(db.Text)
       hostname = db.Column(db.Text)

with app.app_context():
      db.create_all()

      from netops.controller.util import import_devices
      for device in import_devices():
          # device_data = yaml.safe_load(device)
           device_obj = Device(**device)
           db.session.add(device_obj)

      db.session.commit()

import netops.views.ui_views

# Monitor route
@app.route('/monitor', methods=['GET'])
def monitor():
    from netops.ping import ping_device  # Import here to avoid circular imports

    devices_status = {}
    devices = Device.query.all()
    for device in devices:
        if device.ip_address and ping_device(device.ip_address):
            devices_status[device.name] = 'up'
        else:
            devices_status[device.name] = 'down'
    
    return jsonify(devices_status)