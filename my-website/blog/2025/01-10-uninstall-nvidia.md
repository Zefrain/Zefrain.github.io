---
title: Switch Back From NVIDIA to Nouveau
tags: [nvidia, nouveau, linux]
---

## disable nvidia driver

1. open terminal
2. check the current driver

   ```sh
   lspci -k | grep -A 2 -E "(VGA|3D)"
   ```

   see the output like this:

   > Kernel driver in use: nvidia

3. switch to text mode

   ```sh
   sudo systemctl set-default multi-user.target
   sudo reboot
   ```

4. remove nvidia driver one by one

   ```sh
   sudo modprobe -r nvidia*
   ```

<!-- truncate -->

## uninstall nvidia driver

```sh
sudo apt remove --purge '^nvidia-.*'
sudo apt autoremove
sudo apt clean
```

Or if you installed nvidia driver from the official website, you can uninstall it by running the installer again and select uninstall.

```sh
sudo ./NVIDIA-Linux-x86_64-xxx.xx.run --uninstall
```

## reinstall the nouveau driver

```sh
sudo apt install xserver-xorg-video-nouveau
```

## update the initramfs

```sh
sudo update-initramfs -u
```

## reconfigure xorg

```sh
sudo rm /etc/X11/xorg.conf*
```

## enable nouveau driver

```sh
sudo rm /etc/modprobe.d/blacklist-nouveau.conf
```

## switch back to graphical mode

```sh
sudo systemctl set-default graphical.target
sudo reboot
```

## verify the nouveau driver

```sh
lspci -k | grep -A 2 -E "(VGA|3D)"
```

see if the output like this:

> Kernel driver in use: nouveau

## resolve the issue

> modprobe: FATAL: module nvidia is in use

### stop the display manager

```sh
sudo systemctl stop gdm/kdm/lightdm
```

### kill processes using the nvidia driver

```sh
sudo fuser -k /dev/nvidia*
```

### unload the nvidia driver

```sh
sudo modprobe -r nvidia_drm nvidia_modeset nvidia_uvm nvidia
```

### blacklist the nvidia driver

```sh
echo "blacklist nvidia" | sudo tee /etc/modprobe.d/blacklist-nvidia.conf
sudo update-initramfs -u
```
