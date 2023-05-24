FROM node:18-alpine

RUN mkdir -p /usr/src/app node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

CMD [ "npm", "run", "start" ]