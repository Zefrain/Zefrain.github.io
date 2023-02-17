---
title: Why openldap doesn't sync from master
tags: [openldap, sync]
---

# Why openldap can't sync from master 

## config

```conf
#
# See slapd.conf(5) for details on configuration options.
# This file should NOT be world readable.
#

...

# #开启同步
# overlay syncprov
# #contextCSN 当修改20条时 或者10分钟
# syncprov-checkpoint 20 10
# #session 每次同步数据最大量
# syncprov-sessionlog 1000
```

## slave logs

>Feb 17 10:08:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep1: rid=000 starting refresh (sending cookie=rid=000,csn=20230216083743.943082Z#000000#002#000000)
>Feb 17 10:08:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep2: rid=000 got search entry without Sync State control (dc=sinopec,dc=com)
>Feb 17 10:08:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrepl: rid=000 rc -1 retrying (9 retries left)
>Feb 17 10:09:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep1: rid=000 starting refresh (sending cookie=rid=000,csn=20230216083743.943082Z#000000#002#000000)
>Feb 17 10:09:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep2: rid=000 got search entry without Sync State control (dc=sinopec,dc=com)
>Feb 17 10:09:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrepl: rid=000 rc -1 retrying (8 retries left)
>Feb 17 10:10:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep1: rid=000 starting refresh (sending cookie=rid=000,csn=20230216083743.943082Z#000000#002#000000)
>Feb 17 10:10:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep2: rid=000 got search entry without Sync State control (dc=sinopec,dc=com)
>Feb 17 10:10:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrepl: rid=000 rc -1 retrying (7 retries left)
>Feb 17 10:11:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep1: rid=000 starting refresh (sending cookie=rid=000,csn=20230216083743.943082Z#000000#002#000000)
>Feb 17 10:11:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep2: rid=000 got search entry without Sync State control (dc=sinopec,dc=com)
>Feb 17 10:11:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrepl: rid=000 rc -1 retrying (6 retries left)
>Feb 17 10:12:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep1: rid=000 starting refresh (sending cookie=rid=000,csn=20230216083743.943082Z#000000#002#000000)
>Feb 17 10:12:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrep2: rid=000 got search entry without Sync State control (dc=sinopec,dc=com)
>Feb 17 10:12:20 host-10-213-115-95 bdl[pid=3007515,tid=0xeef7da40]: do_syncrepl: rid=000 rc -1 retrying (5 retries left)

## Solutions

uncomment `overlay syncprov` on master 

```conf
#开启同步
overlay syncprov
#contextCSN 当修改20条时 或者10分钟
syncprov-checkpoint 20 10
#session 每次同步数据最大量
syncprov-sessionlog 1000
```
