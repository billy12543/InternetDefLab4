FROM node:latest

COPY package.json yarn.lock vite.config.js index.html /app/
COPY src/ /app/src/
COPY public/ /app/public/
WORKDIR /app/

RUN yarn

ENTRYPOINT ["yarn", "dev","--host"]
