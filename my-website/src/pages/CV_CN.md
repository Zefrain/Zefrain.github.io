# 周尚 
- [English Version (TODO)](/CV_EN)

| 姓名   | 周尚                        |
|:-------|:----------------------------|
| ⼿机   | 18511283747                 |
| 邮箱   | whiothes81@gmail.com        |
| 微信   | 18511283747                 |
| github | https://whiothes.github.io/ |

## 基本信息

* 7 年 Linux C 研发经验
* 熟练掌握Linux环境下的开发及调试 (socket, IPC, I/O, signals, threads, e.g.)
* 熟悉TCP/IP 协议, 熟练使用抓包工具进行数据包分析
* 熟练使用gdb, addr2line, objdump 等工具结合反汇编进行分析
* Linux Kernel 代码风格
* 自我驱动能力尚可, 业余自修APUE, CSAPP等多本经典.

## 技能掌握

按熟练度从高到低: 

* 语言: C, Shell, Python,lua, lisp, asm (多用作反汇编后debug),  C++
* 工具链: gcc, gdb, valgrind, readelf, objdump, addr2line, Makefile, CMake, wireshark, docker, git 
* 数据库: MySQL, SQLite, Oracle, Redis, Solid

## 项目经验

### 深圳竹云科技有限公司 (2021.08 - NOW)

#### BambooCloud Directory (Active Directory)

- 简述: 类似微软活动目录

- 平台: Linux/Windows

- 功能实现: 基于于 ldap 协议的开发工作, 包括
  - binary 语义支持
    -  GmSSL 支持等功能定制
    - Schema 从OUD的迁移
    - 密码钩子(加密), 以支持与AD等其它平台的数据同步


### 北京安为科技有限公司 (2020.09 - 2021.07)

#### IP/Mac 白名单
  * 简述: MAC/IP 一致性校验
  * 平台：arm-linux-4.9
  * 功能实现: 基于 Netfilter 框架对 INPUT 链进行关键字拦截
    1. 读取白名单文件
    2. 劫持LOCAL_IN数据包, 获取接入设备MAC和IP, 本机端口号
       1. 本机端口号不在列表则放行
       2. MAC和IP地址全部匹配则放行
       3. 否则DROP

#### 28181/35114 转换器
  * 简述：GB28181 协议
  * 平台：linux/arm-linux
  * 功能实现:
    * 基于 GB28181/GB35114 协议, 为支持不同版本协议的设备间(摄像头, 管理平台, 存储等)通信提供支持
      * 模块化设计, 模块间基于 tcp 通信
    * 对外支持基于 sip 协议通信

#### 密码机接口封装
  * 简述: 为不同的密码卡封装统一接口提供网络服务
  * 平台: Linux
  * 角色: 开发/维护
  * 说明:
    基于 密码卡/密码机 SDK封装上层通用接口以应对不同厂家需求
  * 国密硬件密码设备, 已提供SDF_的接口函数
      * 使用select 模型, 约定Json格式打包数据, 提供TCP服务

#### 数据库接口

  * 简述: 数据库通用接口封装
  * 平台: linux
  * 功能实现: 基于数据库 stmt* 的API封装通用接口, 以应对 MySQL/SQLite/Oscar数据库切换的需求

### 北京浙星信息技术有限公司 (2017.04 - 2019.12)

#### 百富QR65
  * 简述: 扫码小白盒
  * 平台: Linux
  * 角色: 开发
  * 功能实现: 使用C语言调用驱动层API, 完成登录认证及扫码操作

#### 惠尔丰Z300
  * 简述: POS应用层开发
  * 平台: Linux
  * 角色: 负责收银机的开发工作
  * 功能实现: 使用C语言调用驱动层API, 实现传统POS功能: 显示, 认证, 交易等

### 唐库7.0 && 太平洋咖啡

- 简述: 收银机系统的SAAS服务 
- 平台: Linux 
- ⻆⾊: 参与需求分析, 数据库设计, 接⼝设计; 负责每⽇数据分析的开发⼯作 
- ⽬的: 销售信息汇总 
- 功能实现: 基于Openresty框架, 使用Lua实现业务需求, 以 syslog-ng 实现日志服务器功能, 

### 北京首信信息技术有限公司 (2015.10 - 2017.02)

#### IPTV机顶盒
  * 简述: 电信机顶盒IP地址分发
  * 平台: Linux C
  * 目的: 负责服务器端的IP分发工作
  * 功能实现: 数据解析, Oracle/solid数据库操作, Mac绑定, 3DES加解密, bash脚本, DHCP协议分配IP

#### 其它
  * 简述: 日常小工具的开发
  * 平台: Linux C
  * 作用: 数据解析, gsoap 项目的维护等

## 毕业院校

| 学校                 | 学历         | 起始    | 截⽌    |
| -------------------- | ------------ | ------- | ------- |
| 安徽新华学院         | ⼤专         | 2010.09 | 2014.06 |
| 安徽省六安市⾦寨⼀中 | ⾼中（理科） | 2007.09 | 2010.06 |
