#działa, 20mb, localhost:8080/www/index.html
FROM nginx:alpine
COPY ./ /usr/share/nginx/html

