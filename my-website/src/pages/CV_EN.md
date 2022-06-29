# Zhoushang (DOING)/[周尚](/CV_CN)

| cn       | Zhoushang                   |
|----------|-----------------------------|
| mobile   | 18511283747                 |
| email    | whiothes81@gmail.com        |
| wechat   | 18511283747                 |
| HomePage | https://whiothes.github.io/ |


## Profile

- 7+ years of software development in the Linux environment
- be proficient in dealing with application protocols 
- self-motivated learning altitude 


## Skills

- Proficient: C and tool chains such as gcc, gdb, objdump, tcpdump, git, docker etc.
- Competent: asm, Python, shell 
- Developing Proficiency: lua, lisp, SQL Database.

## Work Experience

### [BambooCloud.com](https://BambooCloud.com)(2021.08 - NOW)

#### BambooCloud Directory

- Brief: like AD but cross-platform
- Platform: Linux/Windows

My major work is based on ldap protocol, the followings are the mainly work I have done.
- gramma support for ';binary'. 

Out project is based on the lastest rfc so that we do not have a support for ";binary", 
which defined in rfc 2252, but our client needs it for data compatibility, 
I have to support it again.

the Binary Attribute defined in rfc 2252,

        All servers MUST implement this form for both generating attribute
      values in search responses, and parsing attribute values in add,
      compare and modify requests, if the attribute type is recognized and
      the attribute syntax name is that of Binary.  Clients which request
      that all attributes be returned from entries MUST be prepared to
      receive values in binary (e.g. userCertificate;binary), and SHOULD
      NOT simply display binary or unrecognized values to users.

but in rfc4517, it has been removed,

      12. The Binary syntax has been removed because it was not adequately
          specified, implementations with different incompatible
          interpretations exist, and it was confused with the ;binary
          transfer encoding.

      13. All discussion of transfer options, including the ";binary"
          option, has been removed.  All imperatives regarding binary
          transfer of values have been removed.

- encrypt methods implemented by GmSSL.

For domestical securitary reasons, we need different encryption methods from the internaltional suits.

- custom settings 

additional preferences with Additional custom features

- password hook

For compatibility , I record the encrypted password into a file when it is changed, so that we can use a tool to read and change again on another DC platform such as AD.

- data migration from OUD


### 北京安为科技有限公司 (2020.09 - 2021.07)

#### IP/Mac 白名单
  - Brief: MAC/IP validation, based on Netfilter
  - Platform：arm-linux-4.9
  - 功能实现: 基于 Netfilter 框架对 INPUT 链进行关键字拦截
    1. 读取白名单文件
    2. 劫持LOCAL_IN数据包, 获取接入设备MAC和IP, 本机端口号
       1. 本机端口号不在列表则放行
       2. MAC和IP地址全部匹配则放行
       3. 否则DROP

#### 28181/35114 转换器
  - Brief：GB28181 协议
  - Platform：linux/arm-linux
  - 功能实现:
    - 基于 GB28181/GB35114 协议, 为支持不同版本协议的设备间(摄像头, 管理Platform, 存储等)通信提供支持
      - 模块化设计, 模块间基于 tcp 通信
    - 对外支持基于 sip 协议通信

#### 密码机接口封装
  - Brief: 为不同的密码卡封装统一接口提供网络服务
  - Platform: Linux
  - 角色: 开发/维护
  - 说明:
    基于 密码卡/密码机 SDK封装上层通用接口以应对不同厂家需求
  - 国密硬件密码设备, 已提供SDF_的接口函数
      - 使用select 模型, 约定Json格式打包数据, 提供TCP服务

#### 数据库接口
  - Brief: 数据库通用接口封装
  - Platform: linux
  - 功能实现: 基于数据库 stmt- 的API封装通用接口, 以应对 MySQL/SQLite/Oscar数据库切换的需求

### 北京浙星信息技术有限公司 (2017.04 - 2019.12)

#### 百富QR65
  - Brief: 扫码小白盒
  - Platform: Linux
  - 角色: 开发
  - 功能实现: 使用C语言调用驱动层API, 完成登录认证及扫码操作

#### 惠尔丰Z300
  - Brief: POS应用层开发
  - Platform: Linux
  - 角色: 负责收银机的开发工作
  - 功能实现: 使用C语言调用驱动层API, 实现传统POS功能: 显示, 认证, 交易等

#### 唐库7.0 && 太平洋咖啡

- Brief: 收银机系统的SAAS服务 
- Platform: Linux 
- ⻆⾊: 参与需求分析, 数据库设计, 接⼝设计; 负责每⽇数据分析的开发⼯作 
- ⽬的: 销售信息汇总 
- 功能实现: 基于Openresty框架, 使用Lua实现业务需求, 以 syslog-ng 实现日志服务器功能, 

### 北京首信信息技术有限公司 (2015.10 - 2017.02)

#### IPTV机顶盒
  - Brief: 电信机顶盒IP地址分发
  - Platform: Linux C
  - Aim: 负责服务器端的IP分发工作
  - 功能实现: 数据解析, Oracle/solid数据库操作, Mac绑定, 3DES加解密, bash脚本, DHCP协议分配IP

#### 其它
  - Brief: 日常小工具的开发
  - Platform: Linux C
  - Aim: 数据解析, gsoap 项Aim维护等


## Graduated
| School                  | Degree       | Begin   | End     |
|-------------------------|--------------|---------|---------|
| ANHUI XINHUA UNIVERSITY | college      | 2010.09 | 2014.06 |
