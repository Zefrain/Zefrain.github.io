/**
 *   @file     11fig04.c
 *   @date     2019-11-05
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    Figure 11.4
 *
 *  shows the problem with using an automatic variable (allocated on the stack)
 * as the argument to pthread_exit.
 *
 */
#include <pthread.h>

#include "apue.h"

struct foo {
    int a, b, c, d;
};

void printfoo(const char *s, const struct foo *fp) {
    printf("%s", s);
    printf(" structure at 0x%lx\n", (unsigned long)fp);
    printf(" foo.a = %d\n", fp->a);
    printf(" foo.b = %d\n", fp->b);
    printf(" foo.c = %d\n", fp->c);
    printf(" foo.d = %d\n", fp->d);
}

void *thr_fn1(void *arg) {
    struct foo foo = {1, 2, 3, 4};
    printfoo("thread 1:\n", &foo);
    pthread_exit((void *)&foo);
}

void *thr_fn2(void *arg) {
    printf("thread 2: ID is %lu\n", (unsigned long)pthread_self());
    pthread_exit((void *)0);
}

int main(void) {
    int         err;
    pthread_t   tid1, tid2;
    struct foo *fp;

    err = pthread_create(&tid1, NULL, thr_fn1, NULL);
    if (err != 0) {
        err_exit(err, "can't create thread 1");
    }

    err = pthread_join(tid1, (void *)&fp);
    if (err != 0) {
        err_exit(err, "can't join with thread 1");
    }

    sleep(1);

    err = pthread_create(&tid2, NULL, thr_fn2, NULL);
    if (err != 0) {
        err_exit(err, "can't create thread");
    }

    sleep(1);
    printfoo("parent:\n", fp);

    exit(0);
}
