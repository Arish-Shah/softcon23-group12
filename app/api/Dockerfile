FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./
COPY .env ./

RUN npm install

COPY . .

ENV NODE_ENV production

RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/index.js" ]

USER node
