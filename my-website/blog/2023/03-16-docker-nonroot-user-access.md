---
title: "Docker: Enable Non-Root User Access"
tags: [docker]
---

## [Enable Non-Root User Access](https://phoenixnap.com/kb/docker-permission-denied#ftoc-heading-4)

1. Enter the command below to create the **docker** group on the system.

```sh
sudo groupadd -f docker
```

2. Type the following `usermod` command to add the active user to the **docker** group.

```sh
sudo usermod -aG docker $USER
```

3. Apply the group changes to the current terminal session by typing:

```sh
newgrp docker
```

4. Check if the **docker** group is in the list of user groups.

```sh
groups
```



