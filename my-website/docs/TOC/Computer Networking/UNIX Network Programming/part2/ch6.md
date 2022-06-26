# Chapter 6. I/O Multiplexing: The 'select' and 'poll' Functions #

## 6.1 Introduction ##

- When a client is handling multiplexing descriptors, I/O multiplexing should be used.
- for a client to handle multiplex sockets at the same time. use `select`
- TCP server handles both a listening socket and its connected sockets, I/O multiplexing is normally used
- a server handles both TCP and UDP, I/O multiplexing is normally used
- a server handles multiple services and perhaps multiple protocols, I/O multiplexing is normally used 

## 6.2 I/O Models ##

- blocking I/O
- nonblocking I/O
- I/O multiplexing (`select` and `poll`)
- signal driven I/O (`SIGIO`)
- asynchronous I/O (the POSIX `aio_`functions)

### Blocking I/O Model ###

![](img/fig6.1.svg)


### Nonblocking I/O Model ###

![](img/fig6.2.svg)


### I/O Multiplexing Model ###

![](img/fig6.3.svg)

### Signal-Driven Model ###

![](img/fig6.4.svg)

### Asynchronous I/O Model ###

![](img/fig6.5.svg)
