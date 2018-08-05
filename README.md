docker build -t node10 .

docker run --rm -i -t -v /home/mikael/dev/www/node/webappnode:/usr/src/app -p 8888:8888 --name webappnode node10 /bin/sh

docker-compose up -d
docker exec -it webappnode /bin/sh

# apk --no-cache add g++ make bash zlib-dev libpng-dev
# npm install -g pngquant-bin --allow-root  --unsafe-perm=true
# npm install