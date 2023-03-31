# softcon23-group12

creates/pushes images and creates pods

```bash
./scripts/docker.sh create
./scripts/kube.sh start
```

exec this before running the application:

```bash
psql postgresql://scrolller:scrolller@localhost:30001/scrolllerdb -f migration.sql
```
