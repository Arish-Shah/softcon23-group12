# TODO: softcon23-group12

### api

- [x] expose api outside the cluster

### web

- [x] add horizontal scaling to ui (presentation)
- [x] create service/ingress/api gateway for ui so that it can be accessed outside the cluster (i used NodePost service, change?) - _ingress created (replaced ClusterIP and NodePost with LoadBalancer), add `127.0.0.1 scrolller.vu api.scrolller.vu` to /etc/hosts file_

- [x] configure tls, ensure api is accessible outside as https. redirect is fine - _done using cert-manager + self-signed_

### security

- [ ] rbac
- [ ] configure network policies

### general

- [ ] add network policy so that db can be accessed only from inside the cluster
- [ ] run on google cloud platform
- [ ] HELM CHART

## presentation

- [ ] UML
- [ ] loadbalancer, storage class, image registry, certificates, roles, network policies
- [ ] container build and first deployment, horizontal scaling (stateless), uninstallation
- [ ] rebuild after source code change, upgrade: deployment rollout, canary upgrade
- [x] horizontal scaling

### misc

- [x] add job to migrate db after pod init (added initContainer but it fails before starting, might need investigation)
- [x] use dns to access db from api
- [x] maybe not use nodeport with db since we can access it locally on 30001 - _switched to use ClusterIP_
