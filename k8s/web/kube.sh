#!/usr/bin/env bash

dir="$(dirname $0)"

microk8s kubectl apply -f $dir/scrolller-web-configmap.yaml
microk8s kubectl apply -f $dir/scrolller-web-deployment.yaml
microk8s kubectl apply -f $dir/scrolller-web-hpa.yaml
microk8s kubectl apply -f $dir/scrolller-web-service.yaml
microk8s kubectl apply -f $dir/scrolller-web-networkpolicy.yaml