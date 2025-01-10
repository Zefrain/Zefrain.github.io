---
title: How to set coredump file path
tags: [coredump, crash, core]
---

## Get coredump file path

```sh
sysctl kernel.core_pattern
```

## Set coredump file path

```sh
sysctl -w kernel.core_pattern=/var/crash/core.%u.%p.%t
```
