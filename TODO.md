# TODO: softcon23-group12

### api

- [x] expose api outside the cluster

### web

- [x] add horizontal scaling to ui (presentation)
- [x] create service/ingress/api gateway for ui so that it can be accessed outside the cluster (i used NodePost service, change?) - _ingress created (replaced ClusterIP and NodePost with LoadBalancer), add `127.0.0.1 scrolller.vu api.scrolller.vu` to /etc/hosts file_

- [x] configure tls, ensure api is accessible outside as https. redirect is fine - _done using cert-manager + self-signed_

### security

- [x] rbac
- [x] configure network policies

### general

- [x] add network policy so that db can be accessed only from inside the cluster
- [ ] run on google cloud platform
- [x] HELM CHART

## presentation

- [ ] UML
- [x] loadbalancer, storage class, image registry, certificates, roles, network policies
- [x] container build and first deployment, horizontal scaling (stateless), uninstallation
- [ ] rebuild after source code change, upgrade: deployment rollout, canary upgrade
- [x] horizontal scaling

### misc

- [x] add job to migrate db after pod init (added initContainer but it fails before starting, might need investigation)
- [x] use dns to access db from api
- [x] maybe not use nodeport with db since we can access it locally on 30001 - _switched to use ClusterIP_
- [x] update values in umbrella chart and reference in sub-chart values - _can only be done by adding umbrella as dependency to sub-charts (not viable)_
