#działa, 20mb, localhost:8080/www/index.html
FROM nginx:alpine
COPY ./www /usr/share/nginx/html
EXPOSE 80
CMD['nginx', '-g', 'daemon off;']

