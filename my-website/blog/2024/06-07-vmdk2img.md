---
Title: 在硬盘上运行虚拟机系统
Tags: [vmdk, vmware, qemu]
---

# 在硬盘上运行虚拟机系统

将虚拟机安装的系统完整拷贝为img文件，并做成U盘系统的方案

## 1. 安装 qemu-img

- [cloudbase.it/qemu-img-windows/](https://cloudbase.it/qemu-img-windows/)

## 2. 虚拟机安装操作系统

- NOTE: 安装时选择单个文件

## 3. 将vmdk文件转换为img

```cmd
qemu-img convert -f vmdk -O raw image.vmdk image.img
```

## 4. 使用 WindowsDiskImager 烧写U盘
