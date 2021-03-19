FROM node:14-stretch

RUN mkdir -p /app/vue
WORKDIR /app/vue

COPY ./package*.json ./
RUN npm install

ENV PATH /app/vue/node_modules/.bin:$PATH

COPY . .
EXPOSE 80

CMD [ \
    "bash", \
    "-c", \
    "npm run serve -- --port 80 &&  \
    /bin/bash" \
    ]