#!/usr/bin/env bash

dir="$(dirname $0)"

microk8s kubectl apply -f $dir/configmap.yaml
microk8s kubectl apply -f $dir/secret.yaml
microk8s kubectl apply -f $dir/deployment.yaml
microk8s kubectl apply -f $dir/hpa.yaml
microk8s kubectl apply -f $dir/service.yaml
microk8s kubectl apply -f $dir/networkpolicy.yaml