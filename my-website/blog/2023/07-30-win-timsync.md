---
title: Windows set time server use w32tm
tags: [windows, time]
---

# Windows set time server to sync

```
w32tm /config /syncfromflags:manual /reliable:yes /update /manualpeerlist:"192.168.188.188 192.168.188.168"

w32tm /resync
```

