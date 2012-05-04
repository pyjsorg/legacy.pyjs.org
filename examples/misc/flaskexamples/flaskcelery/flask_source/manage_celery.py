from __future__ import absolute_import
from flask.ext.script import Manager
from flask.ext.celery import install_commands as install_celery_commands

from FlaskEchoApp import create_app
from celery_views import CeleryEchoView

app = create_app()
manager = Manager(app)
install_celery_commands(manager)
# Register the modelview version of the echoer that offloads the task
# to a celery worker and supports teting the result of a celery worker
# (by id).
app.add_url_rule(
    "/json_celery_class", view_func=CeleryEchoView.as_view("json_celery_class"))

if __name__ == "__main__":
    # Note, this is a script wrapped around a flask server + celery
    # This does require that you already have a RabbitMQ broker running.
    # To start a celeryd (celery worker) use:
    #   "python manage_celery.py celeryd --loglevel=INFO"
    # To start a flask server on localhost:5000 use:
    #   "python manage_celery.py runserver" 
    manager.run()
