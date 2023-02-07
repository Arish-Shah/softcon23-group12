#!/usr/bin/env bash

if [[ $1 = "start" ]]
then
   microk8s kubectl apply -f scrolller-namespace.yaml
  ./postgres/kube.sh start
  ./api/kubefiles/kube.sh start
  ./web/kubefiles/kube.sh start
elif [[ $1 = "stop" ]]
then
  ./postgres/kube.sh stop
  ./api/kubefiles/kube.sh stop
  ./web/kubefiles/kube.sh stop
  microk8s kubectl delete namespace scrolller
else
  echo "usage: ./kube.sh start/stop"
fi
