# Disadvantages of strlen() in Embedded Domain 

To read from a "TCP Communication" you are probably using `read`. The prototype for `read` is

```c
ssize_t read(int fildes, void *buf, size_t nbyte);
```

and the return value is the number of bytes read (even if they are `0`).
So, let's say you're about to read 10 bytes, all of which are 0. You have an array with more than enough to hold all the data

```c
int fildes;
char data[1000];
// fildes = TCPConnection
nbytes = read(fildes, data, 1000);
```

Now, by inspecting `nbytes` you know you have read 10 bytes. If you check `data[0]` through `data[9]` you will find they have `0`;

# Reference:

- [Disadvantages of strlen() in Embedded Domain](https://stackoverflow.com/questions/9173017/disadvantages-of-strlen-in-embedded-domain)

