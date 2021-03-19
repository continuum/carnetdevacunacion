from config.settings.base import *  # NOQA
from os import getenv

ENVIRONMENT = 'production'

HOSTS = ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    ".carnetdevacunacion.com",
    ".herokuapp.com",
]

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': getenv('DATABASE_NAME'),
        'USER': getenv('DATABASE_USER'),
        'PASSWORD': getenv('DATABASE_PASSWORD'),
        'HOST': getenv('DATABASE_HOST'),
        'PORT': getenv('DATABASE_PORT'),
    },
}

ADMINS = [
    ('Saúl Galán', 'saul.galan@continuum.cl'),
    ('Nicolas Caballero', 'nicaolas.caballero@continuum.cl')
]
MANAGERS = ADMINS

INTERNAL_IPS = ('127.0.0.1',)

CORS_ORIGIN_ALLOW_ALL = True

django_heroku.settings(locals())
