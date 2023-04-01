# TODO: softcon23-group12

### api

- [x] expose api outside the cluster

### web

- [x] add horizontal scaling to ui (presentation)
- [ ] create service/ingress/api gateway for ui so that it can be accessed outside the cluster (i used NodePost service, change?)

- [ ] configure tls, ensure api is accessible outside as https. redirect is fine

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

- [ ] add job to migrate db after pod init
- [ ] use dns to access db from api
- [ ] maybe not use nodeport with db since we can access it locally on 30001
