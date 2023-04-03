#!/usr/bin/env bash

dir="$(dirname $0)"

if [[ -z $1 ]]; then
  microk8s helm3 install scrolller $dir/../helm -n scrolller --create-namespace
elif [[ $1 = "u" || $1 = "-u" || $1 = "undo" ]]; then
  microk8s helm3 uninstall scrolller -n scrolller
else
  echo "usage: ./helm.sh (u/undo)"
fi
