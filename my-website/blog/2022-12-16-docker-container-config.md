---
title: docker  modify config for running container
tags: [docker, container, config, mount]
---

# docker modify config for running container

## here is mounted directory

1. stop docker

```sh
$ systemctl stop docker
```

2. modify container's config

```sh
$ cd /var/lib/docker/container/$containerID/

$ vim config.v2.json

# modify MountPoints
```

3. start docker

```sh
$ systemctl start docker
```

4. start container

```sh
$ docker start $containerID
```

