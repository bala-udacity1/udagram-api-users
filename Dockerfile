FROM node:13

WORKDIR /usr/src/udagram-users-app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8079

CMD ["node", "server.js"]