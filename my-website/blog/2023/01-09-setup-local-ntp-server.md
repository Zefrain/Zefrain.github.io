---
title: Configure Local NTP Server
tags: [ntp]
---

1. install NTP package
```bash
# CentOS
sudo yum install -y ntp

# Ubuntu
sudo apt install -y ntp
```

2. Edit `ntp.conf`
```bash
vim /etc/ntp.conf
```

```conf
# Add local server
server 192.168.5.104

# Set access restrict
restrict 192.168.5.0 mask 255.255.254.0 notrap

# Set logfile
logfile /var/log/ntpservice.log
```

3. Start NTP server
```bash
ntpd
```

4. Verify NTP Server
```bash
ntpq -p
```
