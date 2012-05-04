from flask.ext.celery import Celery

from views import echo
from FlaskEchoApp import create_app

app = create_app()
celery = Celery(app)


@celery.task(name="celery_echo")
def celery_echo(mth, txt):
    return echo(mth,txt) 
