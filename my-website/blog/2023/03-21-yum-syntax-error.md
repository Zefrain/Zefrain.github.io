---
title: "yum error with SyntaxError: invalid syntax"
tags: [yum, python3]
---

# yum error with the message below

yum error message:

> [root@31f24739f206 /]# yum
>   File "/usr/bin/yum", line 30
>     except KeyboardInterrupt, e:
>                             ^
> SyntaxError: invalid syntax

- change default **python** from `python3` to `python2`

```sh
alternatives --install /usr/bin/python python /usr/bin/python2 0
```



