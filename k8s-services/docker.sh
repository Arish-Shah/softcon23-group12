#!/usr/bin/env bash

tag=$2
if [[ $tag == "" ]]
then
  tag="v1"
fi

if [[ $1 = "create" ]]
then
   cd api && sudo docker build -t localhost:32000/scrolller-api:$tag .
   cd ../web && sudo docker build -t localhost:32000/scrolller-web:$tag .
   sudo docker push localhost:32000/scrolller-api:$tag
   sudo docker push localhost:32000/scrolller-web:$tag
else
  echo "usage: ./docker.sh create"
fi