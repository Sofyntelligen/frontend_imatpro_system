# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . ./
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as frontend-work-stage

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/docker/work/server/nginx.conf /etc/nginx/conf.d/default.conf:ro