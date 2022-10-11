---
title: iptables port map
tags: [iptables,port map]
---

## iptables port map ##
1. 需要先开启linux的数据转发功能


```sh
# vi /etc/sysctl.conf，将net.ipv4.ip_forward=0更改为net.ipv4.ip_forward=1
# sysctl -p  //使数据转发功能生效
```

2. 更改iptables，使之实现nat映射功能

将外网访问192.168.75.5的80端口转发到192.168.75.3:8000端口。
```sh
# iptables -t nat -A PREROUTING -d 192.168.75.5 -p tcp --dport 80 -j DNAT --to-destination 192.168.75.3:8000
```

将192.168.75.3 8000端口将数据返回给客户端时，将源ip改为192.168.75.5
```sh
# iptables -t nat -A POSTROUTING -d 192.168.75.3 -p tcp --dport 8000 -j SNAT --to 192.168.75.5
```

3. 查看nat，可以使用命令：iptables -t nat –list检查nat列表信息

* references
- [iptables实现端口映射][https://www.cnblogs.com/dongzhiquan/p/11427461.html]
