# build stage
FROM node:18-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build


# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.output/public /usr/share/nginx/html
COPY --from=build-stage /app/ng/ /etc/nginx/conf.d/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]