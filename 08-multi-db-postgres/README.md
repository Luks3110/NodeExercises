docker run \
    --name postgres \
    -p 5433:5433 \
    -e POSTGRES_USER=lucasfernandes \
    -e POSTGRES_PASSWORD=lucas1429 \
    -e POSTGRES_DB=heroes \
    -d \
    postgres

    docker ps
    docker exec -it postgres /bin/bash

    docker run \
        --name adminer \
        -p 8080:8080 \
        --link postgres:postgres \
        -d \
        adminer

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=142961 \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p 142961 --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'lucasfernandes', pwd: '142961', roles: [{role: 'readWrite', db: 'herois'}]})"