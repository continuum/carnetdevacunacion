import os

from config.core_settings import *  # NOQA

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
# Refer to secret from project Secrets usually PROJECTNAME_SECRET

SECRET_KEY = os.environ.get('SECRET_KEY')

INSTALLED_APPS = INSTALLED_APPS + [  # NOQA
]

MIDDLEWARE = MIDDLEWARE + [  # NOQA
    'corsheaders.middleware.CorsMiddleware',
]

REST_FRAMEWORK.update(  # NOQA
    {
        'DEFAULT_AUTHENTICATION_CLASSES': [
            'rest_framework.authentication.SessionAuthentication',
            'rest_framework.authentication.BasicAuthentication',
            'rest_framework.authentication.TokenAuthentication',
        ],
        'DEFAULT_PARSER_CLASSES': [
            'rest_framework.parsers.JSONParser',
        ],
    }
)

REDIS_HOST = os.getenv('REDIS_HOST', 'redis://redis:6379')
