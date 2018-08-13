# Docker set up

docker build -t node10 .

docker run --rm -i -t -v /home/mikael/dev/www/node/webappnode:/usr/src/app -p 8888:8888 --name webappnode node10 /bin/sh

docker-compose up -d
docker exec -it webappnode /bin/sh

# Getting started

## debug 
DEBUG=* node app.js, DEBUG=app node app.js

## eslint
Install eslint and initialize it on command line to install the required dependencies:

`> npm install eslint@^4.19.1 --save-dev`

`> ./node_modules/.bin/eslint --init`