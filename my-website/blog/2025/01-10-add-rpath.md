---
title: Modify rpath of a binary program
tags: [linux, rpath, elf, binary]
---

## Install patchelf

```sh
sudo apt install -y patchelf # Ubuntu/Debian
sudo yum install -y patchelf # CentOS/Fedora
```

## Modify rpath

```sh
patchelf --set-rpath /path/to/libraries /path/to/binary
```

## Check current rpath

```sh
patchelf --print-rpath /path/to/binary
```
