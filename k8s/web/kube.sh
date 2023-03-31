#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ $1 = "start" ]]
then
  microk8s kubectl apply -f $dir/scrolller-web-deployment.yaml
  microk8s kubectl apply -f $dir/scrolller-web-service.yaml
elif [[ $1 = "stop" ]]
then
  microk8s kubectl delete service scrolller-web-service -n scrolller
  microk8s kubectl delete deployment scrolller-web-deployment -n scrolller
else
  echo "usage: ./kube.sh start/stop"
fi
