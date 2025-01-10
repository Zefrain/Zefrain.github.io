---
title: "Docker: Copy From Image"
tags: [docker]
---

# Docker copy file from image to host without creating container

```sh
docker cp $(docker create ${image_id}):/${path} ${destination}
```
