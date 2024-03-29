/**
 *   @file     10fig23.c
 *   @date     2019-10-28
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    wait for a signal handler to set a global variable
 *
 *  catch both the interrupt signal and the quit signal,
 *  but want to wake up the main routine only when the quit signal is caught.
 *
 */
#include "apue.h"
volatile sig_atomic_t quitflag;

// one signal handler for SIGINT and SIGQUIT
static void sig_int(int signo) {
    if (signo == SIGINT) {
        printf("\ninterrupt\n");
    } else if (signo == SIGQUIT) {
        quitflag = 1;  // set flag for main loop
    }
}

int main(void) {
    sigset_t newmask, oldmask, zeromask;

    if (signal(SIGINT, sig_int) == SIG_ERR) err_sys("signal(SIGINT) error");
    if (signal(SIGQUIT, sig_int) == SIG_ERR) err_sys("signal(SIGQUIT) error");

    sigemptyset(&zeromask);
    sigemptyset(&newmask);
    sigaddset(&newmask, SIGQUIT);

    // block SIGQUIT and save current signal mask.
    if (sigprocmask(SIG_BLOCK, &newmask, &oldmask) < 0)
        err_sys("SIG_BLOCK error");
    while (quitflag == 0) sigsuspend(&zeromask);

    quitflag = 0;
    if (sigprocmask(SIG_SETMASK, &oldmask, NULL) < 0)
        err_sys("SIG_SETMASK error");

    exit(0);
}
