#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ $1 = "start" ]]
then
  microk8s kubectl apply -f $dir/scrolller-namespace.yaml
  $dir/../k8s/db/kube.sh start
  $dir/../k8s/api/kube.sh start
  $dir/../k8s/web/kube.sh start
elif [[ $1 = "stop" ]]
then
  $dir/../k8s/web/kube.sh stop
  $dir/../k8s/api/kube.sh stop
  $dir/../k8s/db/kube.sh stop
else
  echo "usage: ./kube.sh start/stop"
fi
