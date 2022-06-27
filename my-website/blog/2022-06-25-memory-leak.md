---
title: memory leak
tags: [memory,]
---

## [find memory leak of a running process](https://unix.stackexchange.com/questions/36450/how-can-i-find-a-memory-leak-of-a-running-process) ##

```sh
cat /proc/$pid/smaps
```
