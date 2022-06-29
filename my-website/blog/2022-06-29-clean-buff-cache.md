---
title: How to Clear Cache in Linux?
tags: [linux,memory,buff,cache]
---

## [How to Clear Cache in Linux?](https://www.tecmint.com/clear-ram-memory-cache-buffer-and-swap-space-on-linux/) ##

1. Clear PageCache only.

```
sync; echo 1 > /proc/sys/vm/drop_caches
```

2. Clear dentries and inodes.

```
sync; echo 2 > /proc/sys/vm/drop_caches
```

3. Clear pagecache, dentries, and inodes.

```sh
sync; echo 3 > /proc/sys/vm/drop_caches 
```


