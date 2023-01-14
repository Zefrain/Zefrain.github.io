---
title: Member Server in an Active Directory Domain
tags: [winbind,AD,domain,ubuntu,kylin]
---

## [Member Server in an Active Directory Domain](https://ubuntu.com/server/docs/samba-active-directory) ##

1. Install packages:
```sh
$ sudo apt install realmd samba libnss-winbind samba-common-bin libpam-winbind winbind
```

2. Edit `/etc/resolv.conf` 
```
nameserver # BD server ip address
```

3. find realm
```sh
$ sudo realm discover 
```
4. Realm join
```sh
$ sudo realm join -v --membership-software=samba --client-software=winbind $DOMAIN REALM
```

5. edit `/etc/nsswitch.conf` 
```conf
passwd:         files systemd winbind
group:          files systemd winbind
```

6. automatically create home directory 
```sh
$ sudo pam-auth-update --enable mkhomedir
```

7. see references for more detail

* references
  - [Member Server in an Active Directory Domain](https://ubuntu.com/server/docs/samba-active-directory)
