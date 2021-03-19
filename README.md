mdc exec web bash
source /opt/venv/bin/activate
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@admin.com', 'admin')" | ./manage.py shell
django-admin startproject carnetdevacunacion