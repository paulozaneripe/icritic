FROM node:18

WORKDIR /server

COPY . .

RUN pnpm install

RUN pnpm build

CMD pnpm start
