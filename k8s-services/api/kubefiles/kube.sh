#!/usr/bin/env bash

if [[ $1 = "start" ]]
then
  microk8s kubectl apply -f scrolller-api-configmap.yaml
  microk8s kubectl apply -f scrolller-api-secret.yaml
  microk8s kubectl apply -f scrolller-api-deployment.yaml
  microk8s kubectl apply -f scrolller-api-service.yaml
elif [[ $1 = "stop" ]]
then
  microk8s kubectl delete service scrolller-api-service
  microk8s kubectl delete deployment scrolller-api-deployment
  microk8s kubectl delete secret scrolller-api-secret
  microk8s kubectl delete configmaps scrolller-api-config
else
  echo "usage: ./kube.sh start/stop"
fi
