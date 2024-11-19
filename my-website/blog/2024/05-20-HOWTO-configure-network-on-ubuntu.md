---
Title: HOWTO configure network on ubuntu server
Tags: [ubuntu, network]
---

# Set netplan configuration

## Set Dynamic IP address[^1][^2]

```sh
for inter in $(ls /sys/class/net); do
if [[ $inter != 'lo' ]]; then
cat << EOF > /etc/netplan/99-$inter.yaml
network:
  ethernets:
    $inter:
      dhcp4: true
  version: 2
  renderer: networkd
EOF
ip link set dev $inter up 
fi
done
```

<!--truncate-->

## Set Static IP address

```conf
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:                      # Replace with your interface name
      dhcp4: false             # Disable DHCP for IPv4
      addresses:
        - 192.168.1.100/24     # Static IP address with subnet mask
      routes:
        - to: 0.0.0.0/0        # Default route (default gateway)
          via: 192.168.1.1     # Replace with your gateway IP
      nameservers:
        addresses:
          - 8.8.8.8            # Primary DNS server (Google DNS)
          - 8.8.4.4            # Secondary DNS server
```

## Apply configurations

```sh
netplan apply
```

## Check IP status

```sh
ip a
```

# Set network config on boot

1. combine script as a shell `/etc/netplan/gen_netplan_config.sh`

```sh
#!/bin/env bash

umask 377

for inter in $(ls /sys/class/net); do
if [[ $inter != 'lo' ]] && [[ ! -e /etc/netplan/99-$inter.yaml ]]; then
cat << EOF > /etc/netplan/99-$inter.yaml
network:
  ethernets:
    $inter:
      dhcp4: true
  version: 2
  renderer: networkd
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
ExecStart=/etc/netplan/gen_netplan_config.sh

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
