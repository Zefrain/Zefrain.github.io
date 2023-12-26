---
title:      Connection ‘ens33‘ is not available on device ens33 because device is strictly unmanaged
tags: [net, nmcli, interface, network]
---

# Connection ‘ens33‘ is not available on device ens33 because device is strictly unmanaged

虚拟机开启 ifconfig 没有ens33网卡，无法上网，同时 图形化模式 没有有线连接选项，重启NetworkManager没有用

```
connection ‘ens33‘ is not available on device ens33 because device is strictly unmanaged
```

- 查看托管状态

```sh
$ nmcli
docker0: disconnected
        "docker0"
        bridge, 02:42:74:81:0C:62, sw, mtu 1500

ens33: unmanaged
        "Intel 82545EM"
        ethernet (e1000), 00:0C:29:C7:13:F3, hw, mtu 1500

lo: unmanaged
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536

Use "nmcli device show" to get complete information about known devices and
"nmcli connection show" to get an overview on active connection profiles.

Consult nmcli(1) and nmcli-examples(7) manual pages for complete usage details.
```

- 开启托管

```sh
$ nmcli n on
```

```sh
$  nmcli
docker0: disconnected
        "docker0"
        bridge, 02:42:74:81:0C:62, sw, mtu 1500

ens33: unmanaged
        "Intel 82545EM"
        ethernet (e1000), 00:0C:29:C7:13:F3, hw, mtu 1500

lo: unmanaged
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536

Use "nmcli device show" to get complete information about known devices and
"nmcli connection show" to get an overview on active connection profiles.

Consult nmcli(1) and nmcli-examples(7) manual pages for complete usage details.
```


- reference

[Connection ‘ens33‘ is not available on device ens33 because device is strictly unmanaged_victoruu的博客-CSDN博客_device is strictly](https://blog.csdn.net/vic_qxz/article/details/118863137)
