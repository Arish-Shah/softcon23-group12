#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ -z $1 ]]; then
  microk8s kubectl apply -f $dir/../k8s/scrolller-namespace.yaml
  $dir/../k8s/db/kube.sh
  $dir/../k8s/api/kube.sh
  $dir/../k8s/web/kube.sh
  microk8s kubectl apply -f $dir/../k8s/scrolller-issuer.yaml
  microk8s kubectl apply -f $dir/../k8s/scrolller-certificate.yaml
  microk8s kubectl apply -f $dir/../k8s/scrolller-ingress.yaml
  microk8s kubectl apply -f $dir/../k8s/scrolller-roles.yaml
  microk8s kubectl apply -f $dir/../k8s/scrolller-rolebindings.yaml
elif [[ $1 = "u" || $1 = "-u" || $1 = "undo" ]]; then
  microk8s kubectl delete namespace scrolller
else
  echo "usage: ./kube.sh (u/undo)"
fi
