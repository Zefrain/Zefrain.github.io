---
title: Set Firewall for ZeroTier Interface
tags: [openwrt, uci, firewall]
---

# Set Firewall for Zerotier Interface

## 0. Check interface name of zerotier

```bash
root@ImmortalWrt:~# zerotier-cli listnetworks
200 listnetworks <nwid> <name> <mac> <status> <type> <dev> <ZT assigned ips>
200 listnetworks 565799d8f6d8da8f furious_draper 8e:da:a0:99:f2:2c OK PUBLIC ztr2qucatz 192.168.168.168/24


```

**ztr2qucatz** is the interface name that we need to use later

## 1. Add zone

```bash
# Add a new zone for ZeroTier
uci add firewall zone
uci set firewall.@zone[-1].name='zerotier'          # Set the zone name to 'zerotier' (can be any name you choose)
uci set firewall.@zone[-1].network='ztr2qucatz'     # Set the network to the ZeroTier interface (ztr2qucatz)
uci set firewall.@zone[-1].input='ACCEPT'           # Allow incoming traffic
uci set firewall.@zone[-1].output='ACCEPT'          # Allow outgoing traffic
uci set firewall.@zone[-1].forward='ACCEPT'         # Allow forwarding traffic (if needed)
uci commit firewall
/etc/init.d/firewall restart
```

## 2. Add rule

```bash
# Allow all traffic from the zerotier zone to the lan zone
uci add firewall rule
uci set firewall.@rule[-1].name='Allow-Zerotier'               # Name for this rule
uci set firewall.@rule[-1].src='zerotier'                      # Source is the zerotier zone (the name of zone just created)
uci set firewall.@rule[-1].dest='lan'                          # Destination is the LAN zone (adjust if necessary)
uci set firewall.@rule[-1].target='ACCEPT'                     # Allow the traffic
uci set firewall.@rule[-1].family='ipv4'                       # Use IPv4 (you can set 'ipv6' or 'both' if needed)
uci set firewall.@rule[-1].dest_port='80 22 445 139 8083 4000' # Specify service port need to be allowed
uci commit firewall
/etc/init.d/firewall restart
```

