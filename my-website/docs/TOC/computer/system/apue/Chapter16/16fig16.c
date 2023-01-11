/**
 *   @file     16fig16.c
 *   @date     2020-01-22
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    client command to get uptime from server
 */

#include <errno.h>
#include <netdb.h>
#include <sys/socket.h>

#include "apue.h"

#define BUFLEN 128

extern int connect_retry(int, int, int, const struct sockaddr *, socklen_t);

void print_uptime(int sockfd) {
    int  n;
    char buf[BUFLEN];

    while ((n = recv(sockfd, buf, BUFLEN, 0)) > 0) {
        write(STDOUT_FILENO, buf, n);
    }

    if (n < 0) {
        err_sys("recv error");
    }
}

int main(int argc, char *argv[]) {
    struct addrinfo *ailist, *aip;
    struct addrinfo  hint;
    int              sockfd, err;

    if (argc != 2) {
        err_quit("usage: ruptime hostname", argv[0]);
    }

    memset(&hint, 0, sizeof(hint));
    hint.ai_socktype  = SOCK_STREAM;
    hint.ai_canonname = NULL;
    hint.ai_addr      = NULL;
    hint.ai_next      = NULL;

    if ((err = getaddrinfo(argv[1], "4000", &hint, &ailist)) != 0) {
        err_quit("getaddrinfo error: %s", gai_strerror(err));
    }
    for (aip = ailist; aip != NULL; aip = aip->ai_next) {
        if ((sockfd = connect_retry(aip->ai_family, SOCK_STREAM, 0,
                                    aip->ai_addr, aip->ai_addrlen)) < 0) {
            err = errno;
        } else {
            print_uptime(sockfd);
            exit(0);
        }
    }

    err_exit(err, "can't connect to %s", argv[1]);
}
