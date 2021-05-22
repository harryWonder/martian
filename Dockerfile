FROM node:15.12.0-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4400

CMD ["node", "index.js"]