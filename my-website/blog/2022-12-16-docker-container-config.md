---
title: docker  modify config for running container
tags: [docker, container, config, mount]
---

# docker modify config for running container

## here is mounted directory

1. stop docker

```bash
systemctl stop docker
```

2. modify container's config

```bash
cd /var/lib/docker/container/$containerID/

vim config.v2.json

# modify MountPoints
```

3. start docker

```bash
systemctl start docker
```

4. start container

```bash
docker start $containerID
```

