#!/usr/bin/env bash

if [[ $1 = "start" ]]
then
  ./postgres/kube.sh start
  ./api/kubefiles/kube.sh start
  ./web/kubefiles/kube.sh start
elif [[ $1 = "stop" ]]
then
  ./postgres/kube.sh stop
  ./api/kubefiles/kube.sh stop
  ./web/kubefiles/kube.sh stop
else
  echo "usage: ./kube.sh start/stop"
fi
