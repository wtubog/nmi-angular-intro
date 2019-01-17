FROM node:11.6-alpine
WORKDIR /app

COPY ./dist ./dist
COPY ./server.js ./

RUN npm install express

ENV PORT=8081

CMD ["node", "server.js"]
