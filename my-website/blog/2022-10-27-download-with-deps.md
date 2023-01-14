---
title: How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OS
tags: [ubuntu, apt, debian, depends]
---

## [How To Download Packages With Dependencies Locally In Ubuntu, Debian, Linux Mint, Pop OSLink Text](https://ostechnix.com/download-packages-dependencies-locally-ubuntu/) ##


### Method 1 ###
```sh
$ sudo apt-get install --download-only <package_name>
```

All downloaded files will be saved in `/var/cache/apt/archives` directory.

```sh
$ sudo dpkg -i *
```

### Method 2 ###
if we have installed packages already, use the `apt-rdepends`
```sh
$ sudo apt install apt-rdepends

apt download $(apt-rdepends vim | grep -v "^ ")

```

if we get errors like this 
```
E: Can't select candidate version from package debconf-2.0 as it has no candidate
```

delete version specified in name like this 
```sh
$ apt-get download $(apt-rdepends vim | grep -v "^ " | sed 's/debconf-2.0/debconf/g')
```

Then
```sh
$ sudo dpkg -i *
```
