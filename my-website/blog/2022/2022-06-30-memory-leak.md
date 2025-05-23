---
title: Debug with memory leak
tags: [memory leak, debug]
sidebar_position: 1
---

## [find memory leak of a running process](https://unix.stackexchange.com/questions/36450/how-can-i-find-a-memory-leak-of-a-running-process)

```sh
cat /proc/$pid/smaps
```

1. find out the `PID` of the process

   ```sh
   ps -aux
   ```

2. capture `/proc/PID/smaps` and save into some file like `before_meminc.txt`
3. wait till memory gets increased
4. try again step 2
5. find the difference between first `smaps` and 2nd `smaps`, e.g. with

   ```sh
   diff -u before_meminc.txt after_meminc.txt
   ```

6. note down the address range where memory got increased

7. use `pstack` and `watch` command to get the right call stack

   ```sh
   watch -n 1 'pstack $PID | tee -a $PID.stack'
   ```

   `C-c` when we caputred right stack

8. check our stack file, find the functions between address range which we got from step 6.
