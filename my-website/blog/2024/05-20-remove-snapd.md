---
title: Remove snapd on ubuntu
---

# [Remove snapd on ubuntu](https://askubuntu.com/questions/1035915/how-to-remove-snap-from-ubuntu)

```
sudo rm -rf /var/cache/snapd/

sudo apt autoremove --purge snapd gnome-software-plugin-snap

rm -fr ~/snap

sudo apt-mark hold snapd

```

