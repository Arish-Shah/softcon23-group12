#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ $1 = "start" ]]
then
  microk8s kubectl apply -f $dir/scrolller-web-configmap.yaml
  microk8s kubectl apply -f $dir/scrolller-web-deployment.yaml
  microk8s kubectl apply -f $dir/scrolller-web-service.yaml
elif [[ $1 = "stop" ]]
then
  microk8s kubectl delete service scrolller-web-service
  microk8s kubectl delete deployment scrolller-web-deployment
  microk8s kubectl delete configmaps scrolller-web-config
else
  echo "usage: ./kube.sh start/stop"
fi
