#!/bin/sh
set -e
target=$1
if [ "${target}" = "prod" ]; then
  echo "test"
# image=381492157376.dkr.ecr.ap-southeast-1.amazonaws.com/alifa-web
# docker build -t ${image} -f ./docker/Dockerfile.prod .
# docker push ${image}
elif [ "${target}" = "dev" ]; then
  docker build -t alifa-web -f ./docker/Dockerfile.dev .
  docker tag alifa-web:latest polygontechxyz/alifa-web:latest
  docker push polygontechxyz/alifa-web:latest
fi