#Stage 1: BUILD

FROM node:trixie AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

#Stage 2: RUN

FROM httpd

COPY --from=builder /app/dist /usr/local/apache2/htdocs

EXPOSE 80
