---
title: Reduce Ubuntu Server
tags: [ubuntu]
---

### 0. Sizes for `/boot` and `/boot/efi`

- **/boot Partition**: You could reduce the `/boot` partition size to around **200 MB**. This should still be sufficient to hold the kernel and initramfs image. Be cautious, as going too small could lead to issues during unexpected updates or changes that might require space, such as security patches for the kernel.
- **/boot/efi Partition**: The EFI System Partition (`/boot/efi`) typically doesn't require much space if you're only using a few boot loaders. A size of **100 MB** is often recommended as a minimum by many Linux distributions and should be more than adequate for most single-boot configurations.

### 1. Install pre-installed ubuntu server 

- Download pre-installed ubuntu server: [Ubuntu Server 24.04 (Noble Numbat) Daily Build](https://cdimage.ubuntu.com/ubuntu-server/noble/daily-preinstalled/current/)
- use [mkusb - Community Help Wiki](https://help.ubuntu.com/community/mkusb) to flash: `dus xxx.tar.xz`

### 2. **Remove Unnecessary Packages** (compile envionrment)

After installation, you can remove packages that are not necessary for your server's purpose:

- List installed packages: 

```sh
dpkg-query -W --showformat='${Installed-Size}\t${Package}\n' | awk '{print $1/1024 " MB\t" $2}' | sort -n -r
```

<!--truncate--> 

- Remove unnecessary packages: `sudo apt-get remove --purge package-name`

```sh
sudo apt-get remove --purge build-essential autoconf automake gcc g++
```

### 3. **Disable Unnecessary Services**

Ubuntu Server starts several services by default. Disabling services that are not needed can save system resources:

- Check running services: `systemctl list-unit-files --state=enabled`
- Disable a service: `sudo systemctl disable service-name`

### 4. **Clean Up Apt Cache**

After installing or updating packages, clean up the APT cache to free up disk space:

```bash
sudo apt-get clean
```

### 5. **Limit Installed Software**

Only install the software that is necessary for your server to function. Evaluate the need for each package before installing it.

### 6. **Configure NoInstallRecommends**

By default, `apt` installs recommended packages along with dependencies. You can limit this behavior by configuring APT to not install recommended packages:

```bash
echo 'APT::Install-Recommends "0";' | sudo tee -a /etc/apt/apt.conf.d/01norecommends
echo 'APT::Install-Suggests "0";' | sudo tee -a /etc/apt/apt.conf.d/01norecommends
```

### 7. **Use Lightweight Alternatives**

Where possible, use lightweight alternatives to common software. For example, use `nginx` instead of `apache2` if you need a web server but require less overhead.

### 8. **Optimize Configuration Files**

Review and optimize configuration files to ensure that no unnecessary modules or plugins are loaded.

### 9. **Regularly Monitor and Audit**

Set up a routine to regularly check and audit your system:

- Use tools like `ncdu` (NCurses Disk Usage) to analyze disk usage.
- Use `htop` or `top` to monitor running processes and resource usage.

### 10. **Use System Snapshots**

Before making significant changes, consider using tools like `timeshift` to take system snapshots. This allows you to revert back if the changes do not produce the desired effect.

### 11. **Security and Updates**

Ensure your minimal server setup is secure and receives necessary security updates. Minimal installations can still be vulnerable to security risks.ƒqn 