FROM node:20.12.1-alpine3.19 as build

WORKDIR /app

COPY . .

RUN rm -rf node_modules

RUN npx pnpm install

RUN npx pnpm build


#FROM prod as build

FROM node:20.12.1-alpine3.19

#FROM gcr.io/distroless/nodejs20

WORKDIR /app

COPY --from=build /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NODE_ENV production
