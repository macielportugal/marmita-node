FROM node:10
WORKDIR /usr/src/
RUN npm install -g @adonisjs/cli
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT [ "/docker-entrypoint.sh" ]

