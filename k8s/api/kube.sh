#!/usr/bin/env bash

dir="$(dirname $0)"

microk8s kubectl apply -f $dir/scrolller-api-configmap.yaml
microk8s kubectl apply -f $dir/scrolller-api-secret.yaml
microk8s kubectl apply -f $dir/scrolller-api-deployment.yaml
microk8s kubectl apply -f $dir/scrolller-api-hpa.yaml
microk8s kubectl apply -f $dir/scrolller-api-service.yaml
microk8s kubectl apply -f $dir/scrolller-api-networkpolicy.yaml