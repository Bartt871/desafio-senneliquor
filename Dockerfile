FROM node:22.8-alpine

RUN apk add make

RUN npm install -g nodemon typescript ts-node

WORKDIR /var/www/app

EXPOSE 3000