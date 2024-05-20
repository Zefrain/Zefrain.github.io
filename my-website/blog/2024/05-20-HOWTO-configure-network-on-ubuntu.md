---
Title: HOWTO configure network on ubuntu server
Tags: [ubuntu, network]
---

# Set Dynamic IP address[^1][^2]

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

# Set network config on boot

1. combine script as a shell `/etc/netplan/gen_netplan_config.sh`

```sh
#!/bin/env bash

for inter in $(ls /sys/class/net); do
if [[ $inter != 'lo' ]] && [[ ! -e /etc/netplan/99-$inter.yaml ]]; then
cat << EOF > /etc/netplan/99-$inter.yaml
network:
  ethernets:
    $inter:
      dhcp4: true
  version: 2
EOF
ip link set dev $inter up
fi
done
netplan apply
```

2. write `/usr/lib/systemd/system/wait-netplan-dhcp.service`[^3]

```conf
[Unit]
Description=Generate DHCP networking DHCP demo for netplan
Before=network-online.target

[Service]
ExecStart=/net/netplan/gen_netplan_config.sh

[Install]
WantedBy=multi-user.target
```

3. start and enable

```sh
systemctl start wait-netplan-dhcp
systemctl enable wait-netplan-dhcp
```



[^1]: [How to List Network Interfaces in Linux](https://www.geeksforgeeks.org/how-to-list-network-interfaces-in-linux/)
[^2]: [How to set network on Ubuntu Server](https://ubuntu.com/server/docs/configuring-networks)
[^3]: [Create a systemctl service](https://unix.stackexchange.com/questions/236084/how-do-i-create-a-service-for-a-shell-script-so-i-can-start-and-stop-it-like-a-d)
