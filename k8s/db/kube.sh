#!/usr/bin/env bash

dir="$(dirname $0)"

microk8s kubectl apply -f $dir/postgres-configmap.yaml
microk8s kubectl apply -f $dir/postgres-secret.yaml
microk8s kubectl apply -f $dir/postgres-storage.yaml
microk8s kubectl apply -f $dir/postgres-deployment.yaml
microk8s kubectl apply -f $dir/postgres-service.yaml
microk8s kubectl apply -f $dir/postgres-networkpolicy.yaml
