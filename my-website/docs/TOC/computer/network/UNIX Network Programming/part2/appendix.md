# Appendix: io_uring

> At its core, io_uring utilizes a ring buffer mechanism to facilitate communication between user space and the kernel. This architecture streamlines data exchange, reducing the overhead associated with traditional AIO interfaces that rely on multiple system calls.

## Why

Substitute file I/O

## What

![img](/Users/zhou/Documents/Zefrain.github.io/my-website/docs/TOC/computer/network/UNIX Network Programming/part2/appendix.assets/uring_0-20240704173550340.png)

Figure 1: A visual representation of the io_uring submission and completion queues.

## How

- `io_uring_setup`: Set up a context for performing asynchronous I/O
- `io_uring_register`: Register files or user buffers for asynchronous I/O
- `io_uring_enter`: Initiate and/or complete asynchronous I/O

## References

- [Why you should use io_uring for network I/O | Red Hat Developer](https://developers.redhat.com/articles/2023/04/12/why-you-should-use-iouring-network-io)
