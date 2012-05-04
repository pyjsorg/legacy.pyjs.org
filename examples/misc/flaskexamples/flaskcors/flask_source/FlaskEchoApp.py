from flask import Flask

from requests import JSONRPCRequest
from views import json_echo

Flask.request_class = JSONRPCRequest


def create_app():
    app = Flask("FlaskEchoApp")
    # Register the blueprint version of the echoer
    app.register_blueprint(json_echo, url_prefix="/json_echo")

    return app
