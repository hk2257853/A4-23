FROM node:16-alpine AS BUILD_IMAGE
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY ./ ./
RUN npm install
RUN npm run build
# EXPOSE 3001
# CMD ["npm","start"]
RUN rm -rf node_modules
RUN npm install --production

FROM node:16-alpine
ENV NODE_ENV production
RUN addgroup -g 1001 -S user_group
RUN adduser -S application -u 1001
RUN mkdir -p /usr/app/
WORKDIR /usr/app
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/node_modules ./node_modules
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/package.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/package-lock.json ./
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/public ./public
COPY --from=BUILD_IMAGE --chown=application:user_group /usr/app/.next ./.next

EXPOSE 3001
CMD [ "npm","start" ]

