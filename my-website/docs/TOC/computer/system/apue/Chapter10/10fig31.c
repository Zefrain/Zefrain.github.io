/**
 *   @file     10fig31.c
 *   @date     2019-10-28
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    How to handle SIGTSTP
 */
#include "apue.h"

#define BUFFSIZE 1024

// signal handler to SIGTSTP
static void sig_tstp(int signo) {
    sigset_t mask;

    sigemptyset(&mask);
    sigaddset(&mask, SIGTSTP);
    sigprocmask(SIG_UNBLOCK, &mask, NULL);

    signal(SIGTSTP, SIG_DFL);
    kill(getpid(), SIGTSTP);

    signal(SIGTSTP, sig_tstp);
}

int main(void) {
    int  n;
    char buf[BUFFSIZE];

    if (signal(SIGTSTP, SIG_IGN) == SIG_DFL) signal(SIGTSTP, sig_tstp);

    while ((n = read(STDIN_FILENO, buf, BUFFSIZE)) > 0)
        if (write(STDOUT_FILENO, buf, n) != 0) err_sys("write error");
    if (n < 0) err_sys("read error");
    exit(0);
}
