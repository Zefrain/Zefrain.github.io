---
title: Prohibit pasword authentication for sshd
tags: [sshd]
---

## Make sure PasswordAuthentication is `no` in config files

```sh
cat /etc/ssh/sshd_config | grep -i passwordauthentication
PasswordAuthentication no

cat /etc/ssh/sshd_config.d/50-cloud-init.conf | grep -i passwordauthentication
PasswordAuthentication no

```

## Restart sshd

```sh
sudo systemctl restart sshd
```
