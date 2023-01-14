---
title: How to block yum from upgrading obsoleted package?
tags: [centos,yum,packages,version,obsoleted]
---

## How to block yum from upgrading obsoleted package? ##

```sh
$ sudo yum --setopt=obsoletes=0 install obsoleted-package
```

or edit `/etc/yum.conf` 
```conf
obsoletes=0
```


- references
  - [How to block yum from upgrading obsoleted package?](https://unix.stackexchange.com/questions/13410/how-to-block-yum-from-upgrading-obsoleted-package)
