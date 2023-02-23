FROM node:18

WORKDIR /server

COPY . .

RUN yarn install

RUN yarn build

CMD yarn start
