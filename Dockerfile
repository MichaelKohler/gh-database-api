FROM node:10-alpine

COPY . /app

WORKDIR '/app'

RUN npm ci

EXPOSE 4567

CMD ["npm", "run", "start"]