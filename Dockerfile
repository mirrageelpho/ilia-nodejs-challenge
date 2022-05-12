FROM node:16-slim

WORKDIR /transactions-service/

RUN npm install -g npm@8.9.0

COPY package.json package-lock.json /transactions-service/

RUN npm ci --silent

COPY . .

USER node

CMD npm run dev