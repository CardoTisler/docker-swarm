FROM node:lts-alpine3.19
LABEL authors="cardo.tisler"

EXPOSE 5173

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "dev", "--host", "0.0.0.0"]