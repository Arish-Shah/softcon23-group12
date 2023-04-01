#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ -z $1 ]]; then
  microk8s kubectl apply -f $dir/scrolller-web-configmap.yaml
  microk8s kubectl apply -f $dir/scrolller-web-deployment.yaml
  microk8s kubectl apply -f $dir/scrolller-web-hpa.yaml
  microk8s kubectl apply -f $dir/scrolller-web-service.yaml
elif [[ $1 = "u" || $1 = "-u" || $1 = "undo" ]]; then
  microk8s kubectl delete service scrolller-web-service -n scrolller
  microk8s kubectl delete hpa scrolller-web-hpa -n scrolller
  microk8s kubectl delete deployment scrolller-web-deployment -n scrolller
  microk8s kubectl delete configmaps scrolller-web-configmap -n scrolller
else
  echo "usage: ./kube.sh (u/undo)"
fi
