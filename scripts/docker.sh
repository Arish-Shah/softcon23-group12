#!/usr/bin/env bash

dir="$(dirname $0)"

tag=$2
if [[ $tag == "" ]]
then
  tag="v1"
fi

if [[ $1 = "create" ]]
then
  cd $dir/../app/api
  echo "building backend..."
  docker build -t localhost:32000/scrolller-api:$tag .
  docker push localhost:32000/scrolller-api:$tag

  cd ../web
  echo "building frontend..."
  docker build -t localhost:32000/scrolller-web:$tag .
  docker push localhost:32000/scrolller-web:$tag
else
  echo "usage: ./docker.sh create"
fi