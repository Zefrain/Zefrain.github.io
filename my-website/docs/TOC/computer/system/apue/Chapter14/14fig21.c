/**
 *   @file     14fig21.c
 *   @date     2019-12-26
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    translate a file using ROT-13
 *
 *   block mode
 */

#include <aio.h>
#include <ctype.h>
#include <errno.h>
#include <fcntl.h>

#include "apue.h"

extern char *__progname;

#define BSZ  4096
#define NBUF 8

enum rwop { UNUSED = 0, READ_PENDING = 1, WRITE_PENDING = 2 };

struct buf {
    enum rwop     op;
    int           last;
    struct aiocb  aiocb;
    unsigned char data[BSZ];
};

struct buf bufs[NBUF];

unsigned char translate(unsigned char c) {
    if (isalpha(c)) {
        if (c >= 'n') {
            c -= 13;
        } else if (c >= 'a') {
            c += 13;
        } else if (c >= 'N') {
            c -= 13;
        } else {
            c += 13;
        }
    }

    return c;
}

int main(int argc, char **argv) {
    int                 ifd, ofd, i, j, n, err, numop;
    struct stat         sbuf;
    const struct aiocb *aiolist[NBUF];
    off_t               off = 0;

    if (argc != 3) {
        err_quit("usage: %s infile outfile", __progname);
    }

    if ((ifd = open(STDIN_FILENO, O_RDONLY)) < 0) {
        err_sys("can't open %s", argv[1]);
    }

    if ((ofd = open(argv[2], O_RDWR | O_CREAT | O_TRUNC, FILE_MODE)) < 0) {
        err_sys("can't open %s", argv[2]);
    }

    for (i = 0; i < NBUF; ++i) {
        bufs[i].op                              = UNUSED;
        bufs[i].aiocb.aio_buf                   = bufs[i].data;
        bufs[i].aiocb.aio_sigevent.sigev_notify = SIGEV_NONE;
        aiolist[i]                              = NULL;
    }

    numop = 0;

    for (;;) {
        for (i = 0; i < NBUF; ++i) {
            switch (bufs[i].op) {
                case UNUSED: {
                    if (off < sbuf.st_size) {
                        bufs[i].op               = READ_PENDING;
                        bufs[i].aiocb.aio_fildes = ifd;
                        bufs[i].aiocb.aio_offset = off;
                        off += BSZ;
                        if (off >= sbuf.st_size) {
                            bufs[i].last = 1;
                        }
                        bufs[i].aiocb.aio_nbytes = BSZ;
                        if (aio_read(&bufs[i].aiocb) < 0) {
                            err_sys("aio_read failed");
                        }
                        aiolist[i] = &bufs[i].aiocb;
                        numop++;
                    }
                    break;
                }

                case READ_PENDING: {
                    if ((err = aio_error(&bufs[i].aiocb)) == EINPROGRESS)
                        continue;

                    if (err != 0) {
                        if (err == -1) {
                            err_sys("aio_error failed");
                        } else {
                            err_exit(err, "read failed");
                        }
                    }

                    if ((n = aio_return(&bufs[i].aiocb)) < 0) {
                        err_sys("aio_return failed");
                    }
                    if (n != BSZ && !bufs[i].last) {
                        err_quit("short read (%d/%d)", n, BSZ);
                    }
                    for (j = 0; j < n; ++j) {
                        bufs[i].data[j] = translate(bufs[i].data[j]);
                    }

                    bufs[i].op               = WRITE_PENDING;
                    bufs[i].aiocb.aio_fildes = ofd;
                    bufs[i].aiocb.aio_nbytes = n;
                    if (aio_write(&bufs[i].aiocb) < 0) {
                        err_sys("aio_write failed");
                    }

                    break;
                }

                case WRITE_PENDING: {
                    if ((err = aio_error(&bufs[i].aiocb)) == EINPROGRESS) {
                        continue;
                    }
                    if (err != 0) {
                        if (err == -1) {
                            err_sys("aio_error failed");
                        } else {
                            err_exit(err, "write failed");
                        }
                    }

                    if ((n = aio_return(&bufs[i].aiocb)) < 0) {
                        err_sys("aio_return failed");
                    }
                    if (n != bufs[i].aiocb.aio_nbytes) {
                        err_quit("short write (%d/%d)", n,
                                 bufs[i].aiocb.aio_nbytes);
                    }

                    aiolist[i] = NULL;
                    bufs[i].op = UNUSED;
                    numop--;
                    break;
                }

                default:
                    break;
            }
        }
        if (numop == 0) {
            if (off >= sbuf.st_size) {
                break;
            }
        } else {
            if (aio_suspend(aiolist, NBUF, NULL) < 0) {
                err_sys("aio_suspend failed");
            }
        }
    }

    bufs[i].aiocb.aio_fildes = ofd;
    if (aio_fsync(O_SYNC, &bufs[0].aiocb) < 0) {
        err_sys("aio_fsync failed");
    }

    exit(EXIT_SUCCESS);
}
