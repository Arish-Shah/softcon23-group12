#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ -z $1 ]]; then
  cd $dir/../app/api
  echo "building backend..."
  docker build -t localhost:32000/scrolller-api:v1 .
  docker push localhost:32000/scrolller-api:v1

  cd ../web
  echo "building frontend..."
  docker build -t localhost:32000/scrolller-web:v1 .
  docker push localhost:32000/scrolller-web:v1
elif [[ $1 = "u" || $1 = "-u" || $1 = "undo" ]]; then
  docker rmi -f $(docker images -aq)
  # docker system prune
else
  echo "usage: ./docker.sh (u/undo)"
fi