FROM node:20.12.1-alpine3.19 as build

WORKDIR /app

COPY . .

RUN npx pnpm add prisma

#RUN npx pnpm build


