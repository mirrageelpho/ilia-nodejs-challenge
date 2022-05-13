FROM node:16-slim

WORKDIR /transactions-service/

RUN npm install -g npm

COPY package.json package-lock.json /transactions-service/

RUN npm ci --silent

COPY . .

USER node


CMD npm run dev
#CMD npm run test:functional
