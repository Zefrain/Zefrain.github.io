---
title: Auth Login at Startup
---

# Auto Login at Startup



Run`sudo systemctl edit getty@tty1.service`

```conf
[Service]
ExecStart=
ExecStart=-/sbin/agetty --noissue --autologin myusername %I $TERM
Type=idle
```

# Reference

- [command line - How can I get autologin at startup working on Ubuntu Server 16.04.1? - Ask Ubuntu](https://askubuntu.com/questions/819117/how-can-i-get-autologin-at-startup-working-on-ubuntu-server-16-04-1)

