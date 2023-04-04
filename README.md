# softcon23-group48

**scrolller**: Browse and Save images from Reddit.

[Project Repository](https://github.com/Arish-Shah/softcon23-group48)

## Directory Structure

- `app/`: contains the application source code along with Dockerfiles for the REST API and Web UI.
- `helm/`: includes the umbrella helm chart `scrolller` and its three dependent sub-charts: `db`, `api`, and `web`.
- `k8s/`: contains the vanilla Kubernetes YAML files to deploy the application without using helm.
- `scripts/`: includes the shell scripts to build and publish the application docker images, and deploy through Kubernetes.

## Technology Stack

- **Database**: PostgreSQL
- **REST API**: Express.js
- **Web UI**: React.js

## Application UML Diagrams

## Requirements

You need to have `docker` and `microk8s` installed on your system. Enable the following addons for `microk8s` before installing the application:

```shell
microk8s enable dns cert-manager helm3 ingress metallb rbac registry storage
```

## Installation

Before installing the application, we build the images and publish them to the microk8s' private Docker registry.

1. To do so, we can either use the bash script `docker.sh` or do it manually.

```shell
./scripts/docker.sh

# or

cd ./app/api
docker build -t localhost:32000/api:v1 .
docker push localhost:32000/api:v1

cd ./app/web
docker build -t localhost:32000/web:v1 .
docker push localhost:32000/web:v1
```

2. Now, we install the application using Helm.

```shell
microk8s helm3 install scrolller ./helm -n scrolller --create-namespace
```

3. To install the application without using Helm, we can use the kube.sh script.

```shell
./scripts/kube.sh
```

## Scaling

<!-- update minReplicas, then helm upgrade scrolller ./helm -n scrolller -->

## Upgrade

<!-- update some value in CSS file, publish image with a new tag, update values.yaml image property to pull the new image, update application version, update dependencies version in umbrella chart. run helm upgrade srolller ./helm -n scrolller. hopefully should work -->

## Uninstallation

<!-- helm uninstall scrolller -n scrolller -->
