FROM node:16-alpine
WORKDIR /usr/src/app
COPY ./package* ./
RUN npm install
COPY . .
EXPOSE 1001
CMD [ "index.js" ]


