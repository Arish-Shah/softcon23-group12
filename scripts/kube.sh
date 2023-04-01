#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ -z $1 ]]; then
  microk8s kubectl apply -f $dir/../k8s/scrolller-namespace.yaml
  $dir/../k8s/db/kube.sh
  $dir/../k8s/api/kube.sh
  $dir/../k8s/web/kube.sh
  microk8s kubectl apply -f $dir/../k8s/scrolller-issuer.yaml
  microk8s kubectl apply -f $dir/../k8s/scrolller-ingress.yaml
elif [[ $1 = "u" || $1 = "-u" || $1 = "undo" ]]; then
  microk8s kubectl delete ingress scrolller-ingress -n scrolller
  microk8s kubectl delete issuer scrolller-issuer -n scrolller
  microk8s kubectl delete secret scrolller-tls-secret -n scrolller
  $dir/../k8s/web/kube.sh -u
  $dir/../k8s/api/kube.sh -u
  $dir/../k8s/db/kube.sh -u
  microk8s kubectl delete namespace scrolller
else
  echo "usage: ./kube.sh (u/undo)"
fi
