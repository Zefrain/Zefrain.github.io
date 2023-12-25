---
title: How to associate assembly code to exact line in C program?
tags: [debug, objdump, C, asm]
---

1. `gcc` arguments

```sh
gcc -fverbose-asm
```

2. `objdump` arguments

```sh
objdump -lSd
```

