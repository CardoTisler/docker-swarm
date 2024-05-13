FROM node:alpine3.19

EXPOSE 3001
ENV PORT=3001

WORKDIR /app

COPY . .

RUN yarn install

CMD ["node", "app.js"]