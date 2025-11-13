FROM nginx:alpine

COPY artifacts /usr/share/nginx/html/
COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template
COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 80 443

CMD ["/docker-entrypoint.sh"]