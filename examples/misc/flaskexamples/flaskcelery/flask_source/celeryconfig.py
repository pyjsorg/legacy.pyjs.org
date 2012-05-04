BROKER_HOST = "localhost"
BROKER_PORT = "5672"
BROKER_USER = "your_celery_user_here"
BROKER_PASSWORD = "your_password_here"

# For now we use the AMQP backend to store task metadata and return values, 
# but one may wish to store it somewhere that is persistent rather than send 
# it as an AMQP message.
CELERY_RESULT_BACKEND = "amqp"
#CELERY_RESULT_BACKEND = "redis"
#CELERY_REDIS_HOST = "localhost"
#CELERY_REDIS_PORT = "6379"

CELERY_IMPORTS = ("celery_tasks",)
