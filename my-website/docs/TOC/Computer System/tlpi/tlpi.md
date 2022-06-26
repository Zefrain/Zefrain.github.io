# The Linux Programming Interface

## Chapter 63: Alternative I/O Models

* I/O multiplexing (`select()` / `poll()`)
* signal-driven I/O
* the Linux-specific _epoll_ API

### 63.1 Overview

* I/O multiplexing allows a process to simultaneously monitor multiple file descriptors to find out whether I/O is possible on any of them. (`select`/`poll`)
* Signal-driven is a technique whereby a process requests that the kernel send it a signal when input is available or data can be written on a specified file descriptor.
* The _epoll_ API allows a process to monitor multiple file descriptors to see if I/O is possible on any of them.


* *Which technique ?*
* select and poll :
* advantage: *portability*
* disadvantage: don't scale well when monitoring large numbers of file descriptors.
* epoll:
* primary advantage: allows an application to efficiently monitor large numbers of file descriptors.
* advantages over signal-driven I/O:
* avoid complexities of dealing with signals
* can specify the kind of monitoring that we want to perform (r/w)
* can select either level-triggered or edge-triggered notification
* disadvantage: Linux-specific API  (OSX: kqueue)
* signal-driven I/O

#### 63.1.1 Level-Triggered and Edge-Triggered Notifications


* Level-triggered notification: A file descriptor is considered to be ready if it is possible to perform an I/O system call without blocking.
* Edge-triggered notification: Notification is provided if there is I/O activity (e.g. new input) on a file descriptor since it was last monitored .


Use of level-triggered and edge-triggered notification models

| I/O model            | Level-triggered ? | Edge-triggered |
|:--------------------:|:-----------------:|:--------------:|
| `select()`, `poll()` | *                 |                |
| Signal-driven I/O    |                   | *              |
| epoll                | *                 | *              |


* level-triggered: check readiness of a file descriptor at any time. not necessary to perform as much I/O as possible. (e.g., read as many bytes as possible).
* edge-triggered: only when an I/O event occurs.
* should-at some point (but may starve other fd when perform a large number of I/O on one fd) -perform as much I/O as possible (e.g., read as many bytes as possible) on the corresponding file descriptor.
* would not be aware of the need to operate on the fd until another I/O event occured.
* could lead to spurious data loss or blockages
* will block I/O system call when no more I/O if it's a loop to perform as much I/O as possible on the fd and marked as blocking

#### 63.1.2 Employing Nonblocking I/O with Alternative I/O models

* nonblocking I/O is usually employed in conjunction with I/O models that provide edge- triggered notification of I/O events
* while multiple process (or threads) are performing I/O on the same open fd, a fd's readiness may change between the time the fd was notified as being ready and the time of the subsequent I/O call.
* large block data writing may nevertheless block even after a level-triggered APIs such as `select()` or `poll()` informs ready for writing.
* level-triggered APIs can return spurious readiness notifications -- falsely inform ready. could be caused by a kernel bug or be expected behavior in an uncommon scenario.

### 63.2 I/O Multiplexing

#### 63.2.4 comparison of `select()` and `poll()`

* _fd_set_ for `select` has a limit on the range of file descriptors, by default, it is 1024.
* we must reinitialize fd_set arguments while using `select()` because they are value-result.
* the _timeout_ precision is different between `select()` and `poll()`
* if one of the file descriptors being monitored was closed, `poll()` informs exactly which one, but `select()` not.

##### Portability

`select` was more widely available than `poll`

##### Performance

The performance is similar is either is true:
* file descriptors to be monitored is small.
* a large number of file descriptors are being monitored, but they are densely packed.


`poll` can perform better than `select` if the set of file descriptors to be monitored is sparse

#### 63.2.5 Problems with `select()` and `poll()`

* On each call of them, the kernel must check all of the specified file descriptors to see if they are ready.
* In each call of them, the program must pass a data structure to the kernel describing all the file descriptors to be monitored, and then the kernel returns a modified version.
* After the call of them, the program must inspect every element of the retured data structure to see which file descriptors are ready.

### 63.3 Signal-Driven I/O

steps:
1. Establish a handler for the signal delivered by the signal-driven I/O mechanism. By default, SIGIO.
2. set /owner/ of the file descriptor.
```c
fcntl(fd, F_SETOWN, pid);
```
3. Enable nonblocking I/O by setting the *O_NONBLOCK* open file status flag.
4. Enable signal-driven I/O by turning on the *O_ASYNC* open file status flag.
```c
flags = fcntl(fd, F_GETFL);
fcntl(fd, F_SETFL, flags | O_ASYNC | O_NONBLOCK);
```
5. When I/O becomes possible, the kernel generates a signal for the process and invokes the signal handler established in step 1.
6. edge-triggered notification.


* Example program
#+include: "Chapter63/demo_sigio.c" src c

#### 63.3.1 When Is "I/O Possible" Signaled?

##### Terminals and pseudoterminals

### 63.4 The _epoll_ API

primary advantages:
* much better than `select` and `poll` when monitoring large numbers of file descriptors
* _epoll_ permits either level-triggered or edge-triggered notification.

_epoll_ has some advantages over signal-driven I/O:
* avoid complexities of signal handling.
* greater flexibility in specifying what kind of monitoring we want to perform.

*The _epoll_ API is Linux-specific (kqueue on MacOS), and is new in Linux 2.6*

_epoll instance_, the central data structure, is a handle for kernel data structures that serve two purposes:
* recording a list of file descriptors that this process has declared an interest in monitoring - the _interest list_.
* maintaining a list of file descriptors that are ready for I/O - the _ready list_.

The membership of the ready list is a _subset_ of the interest list.

The _epoll_ API consists of three system calls.
* The `epoll_create()` system call creates an _epoll_ instance and returns a file descriptor referring to the instance.
* The `epoll_ctl()` system call manipulates the interest list associated with an _epoll_ instance.
* The `epoll_wait()` system call returns items from the ready list associated with an _epoll_ instance.

#### 63.4.1 Creating an _epoll_ instance: `epoll_create()`

```c
#include <sys/epoll.h>

/**
 * @brief      create a new epoll instance
 *
 * @param      size     specifies the number of file descriptors that we expect to monitor
 *
 * @return     file descriptor on success, or -1 on error
 */
int epoll_create(int size);
```

#### 63.4.2 Modifying the _epoll_ Interest List: `epoll_ctrl()`

```c
#include <sys/epoll.h>

/**
 * @brief      modifies the interest list of the _epoll_ instance
 *
 * @details    detailed description
 *
 * @param      epfd     refered by
 * @param      op       EPOLL_CTRL_ADD, EPOLL_CTL_MOD, EPOLL_CTL_DEL
 * @param      ev       man epoll_ctl for details
 *
 * @return     0 on success, -1 on error
 */
int epoll_ctl(int epfd, int op, int fd, struct epoll_event *ev);
```

#+caption: Using `epoll_create()` and `epoll_ctl()`
```c
int epfd;
struct epoll_event ev;

epfd = epoll_create(5);
if (epfd `` -1) {
        err_sys("epoll_create");
}

ev.data.fd = fd;
ev.events = EPOLLIN;
if (epoll_ctl(epfd, EPOLL_CTL_ADD, fd, ev) `` -1) {
        err_sys("epoll_ctl");
}
```


#### 63.4.3 Waiting for Events: `epoll_wait()`

```c
#include <sys/epoll.h>

/**
  * @brief      returns info about ready file descriptors
  *
  * @details    from the epoll instance refered to by the file descriptor epfd.
  *
  * @return     number of ready fd if OK, 0 on timeout, -1 on error.
  */
int epoll_wait(int epfd, struct epoll_event *evlist, int maxevents, int timeout);
```

* The `EPOLLONESHOT` flag
For specify to be notified only once about a particular file descriptor. Reenable by using the `epoll_ctl()` `EPOLL_CTL_MOD` operation.

* Example program
#+caption: Listing 63-5: Using the epoll API
#+include: "Chapter63/epoll_input.c" src c
