FROM nginx:stable

RUN apt-get update -q
RUN apt-get install -qy python3-pip python3-venv python3-dev
RUN apt-get install -y nano curl libpq-dev apt-utils gettext git libffi-dev
RUN pip3 install --upgrade pip
RUN pip3 install virtualenv

# Install and configure poetry
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python3
ENV PATH="$PATH:/root/.poetry/bin"

RUN mkdir -p /webapps

WORKDIR /opt
RUN virtualenv venv

WORKDIR /tmp

COPY ./poetry.lock ./
COPY ./pyproject.toml ./

# RUN sed -i 's|#!/usr/bin/env python|#!/usr/bin/env python3|g' ~/.poetry/bin/poetry
RUN poetry lock --no-update
RUN poetry export -n --without-hashes -f requirements.txt -o /tmp/requirements.txt --dev
RUN bash -c "source /opt/venv/bin/activate && pip3 install -r /tmp/requirements.txt --no-cache-dir"

# Change UTC
ENV TZ="America/Santiago"

RUN mkdir -p /var/log/carnetdevacunacion/
RUN touch /var/log/carnetdevacunacion/carnetdevacunacion.log
RUN chmod 766 /var/log/carnetdevacunacion/carnetdevacunacion.log

COPY ./scripts/* /usr/local/bin/
RUN bash -c "chmod 755 -R /usr/local/bin"

COPY . /webapps/carnetdevacunacion
WORKDIR /webapps/carnetdevacunacion
EXPOSE 7000 7001 7002

CMD ["/bin/bash"]