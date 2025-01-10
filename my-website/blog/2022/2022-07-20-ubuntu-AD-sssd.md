---
title: SSSD and Active Directory
tags: [sssd, AD, domain, ubuntu, kylin]
---

## SSSD and Active Directory

1. install packages:

```sh
sudo apt install sssd-ad sssd-tools realmd adcli sssd-tools sssd libnss-sss libpam-sss adcli packagekit
```

2. join domain

```sh
sudo realm discover -v $DOMAIN
sudo realm join $DOMAIN
```

3. edit `/etc/sssd/sssd.conf`

```conf
$ vim /etc/sssd/sssd.conf

[sssd]
domains = ad1.example.com
config_file_version = 2
services = nss, pam

[domain/ad1.example.com]
default_shell = /bin/bash
krb5_store_password_if_offline = True
cache_credentials = True
krb5_realm = AD1.EXAMPLE.COM
realmd_tags = manages-system joined-with-adcli
id_provider = ad
fallback_homedir = /home/%u@%d
ad_domain = ad1.example.com
use_fully_qualified_names = True
ldap_id_mapping = True
access_provider = ad

# the following is not shown in ubuntu documentation,
# but is necessary for version after 22
ad_gpo_ignore_unreadable = True
ad_gpo_access_control = permissive
```

4. automatically create home directory

```sh

sudo pam-auth-update --enable mkhomedir
```

5. check

```sh
getent passwd $USERNAME@$DOMAIN
```

6. login

```sh
$ sudo login

ad-client login: $USERNAME@$DOMAIN
Password:
Welcome to Ubuntu 20.04 LTS (GNU/Linux 5.4.0-24-generic x86_64)
...
Creating directory '/home/john@ad1.example.com'.
john@ad1.example.com@ad-client:~
```

- references
  - [SSSD and Active Directory](https://ubuntu.com/server/docs/service-sssd-ad)
