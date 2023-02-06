#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ $1 = "start" ]]
then
  microk8s kubectl apply -f $dir/postgres-configmap.yaml
  microk8s kubectl apply -f $dir/postgres-secret.yaml
  microk8s kubectl apply -f $dir/postgres-storage.yaml
  microk8s kubectl apply -f $dir/postgres-deployment.yaml
  microk8s kubectl apply -f $dir/postgres-service.yaml
elif [[ $1 = "stop" ]]
then
  microk8s kubectl delete service postgres-service
  microk8s kubectl delete deployment postgres-deployment
  microk8s kubectl delete pvc postgres-pv-claim
  microk8s kubectl delete pv postgres-pv-volume
  microk8s kubectl delete secret postgres-secret
  microk8s kubectl delete configmaps postgres-config
else
  echo "usage: ./kube.sh start/stop"
fi
