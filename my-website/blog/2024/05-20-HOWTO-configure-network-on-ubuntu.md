---
Title: HOWTO configure network on ubuntu server
Tags: [ubuntu, network]
---

## Dynamic IP address[^1][^2]

1. set netplan configuration

```sh
for inter in $(ls /sys/class/net); do
if [[ $inter != 'lo' ]]; then
cat << EOF > /etc/netplan/99-$inter.yaml
network:
  ethernets:
    $inter:
      dhc4: true
  version: 2
  rendered: networkd
EOF
ip link set dev $inter up 
fi
done
```

2. apply configurations

```sh
netplan apply
```

3. check IP status

```sh
ip a
```



[^1]: [How to List Network Interfaces in Linux](https://www.geeksforgeeks.org/how-to-list-network-interfaces-in-linux/)
[^2]: [How to set network on Ubuntu Server](https://ubuntu.com/server/docs/configuring-networks)
