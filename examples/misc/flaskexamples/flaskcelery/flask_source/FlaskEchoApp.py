from flask import Flask

from requests import JSONRPCRequest
from views import json_echo, echo
from method_views import JSONEchoView

Flask.request_class = JSONRPCRequest


def create_app():
    app = Flask("FlaskEchoApp")
    app.config.from_pyfile("celeryconfig.py")
    # Register the blueprint version of the echoer
    app.register_blueprint(json_echo, url_prefix="/json_echo")
    # Register the modelview version of the echoer
    app.add_url_rule(
        "/json_echo_class", view_func=JSONEchoView.as_view("json_echo_class"))

    return app
