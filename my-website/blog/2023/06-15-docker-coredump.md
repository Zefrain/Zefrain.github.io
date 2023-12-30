---
title: "generate coredump for docker container"
tags: [coredump, docker]
---

- use `--cap-add=SYS_PTRACE` flag when running the container

```
docker run --cap-add=SYS_PTRACE ...
```

- add it to a `docker-compose` file 

```
version: '3'
services:
  your-service:
    image: your-image
    cap_add:
      - SYS_PTRACE
```

