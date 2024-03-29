/**
 *   @file     10fig11.c
 *   @date     2019-10-26
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    calling read with a timeout, using longjmp
 */

#include <setjmp.h>

#include "apue.h"

static void    sig_alrm(int);
static jmp_buf env_alrm;

int main() {
    int  n;
    char line[MAXLINE];

    if (signal(SIGALRM, sig_alrm) == SIG_ERR) err_sys("signal(SIGALRM) error");

    if (setjmp(env_alrm) != 0) err_quit("read timeout");

    alarm(10);

    if ((n = read(STDIN_FILENO, line, MAXLINE)) < 0) err_sys("read error");

    alarm(0);

    write(STDOUT_FILENO, line, n);
    exit(0);
}

static void sig_alrm(int signo) { longjmp(env_alrm, 1); }
