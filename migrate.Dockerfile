FROM node:20.12.1-alpine3.19 as build

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next

RUN npm install prisma -g

#RUN npx pnpm build


