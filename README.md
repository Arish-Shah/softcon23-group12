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

## Requirements

You need to have `docker` and `microk8s` installed on your system. Enable the following addons for `microk8s` before installing the application:

```bash
microk8s enable dns cert-manager helm3 ingress metallb rbac registry storage
```

## Installation

## Upgrade

## Uninstallation
