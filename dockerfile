FROM node:18 AS build

WORKDIR /infinityFrontEnd
COPY package.json .
RUN npm install
COPY . .
CMD npm start