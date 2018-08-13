FROM node:10-alpine

RUN apk add --no-cache git
# RUN apk add --no-cache bash sqlite 

WORKDIR /usr/src/app/

# COPY package.json .
# RUN npm install
# RUN npm install -g eslint@^4.19.1

EXPOSE 8888

CMD [ "npm", "start" ]