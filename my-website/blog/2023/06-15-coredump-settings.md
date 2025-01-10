---
title: "coredump related settings"
tags: [coredump, coredumplist, sysctl]
---

# coredump related settings

## 1. coredump limits

- for this login time

```
ulimits -c unlimited
```

- for the permanent time

```
vim /etc/security/limits.conf

*               soft    core            unlimited
*               hard    core            unlimited
```

## 2. coredump file path

```
sudo sysctl -w kernel.core_pattern="|/tmp/core_dump_example.py %e"
```

`man core` for the details about `%` part like `%e` in coredump file name

## 3. generating coredump

```
kill -SIGSEGV ${PID}
```
