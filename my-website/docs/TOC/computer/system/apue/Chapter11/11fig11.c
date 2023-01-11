/**
 *   @file     11fig11.c
 *   @date     2019-11-06
 *   @author   zefrain <whiothes81@gmail.com>
 *   @version  1.0
 *   @brief    the use of two mutexes
 */

#include <pthread.h>
#include <stdio.h>

#include "apue.h"

#define NHASH    29
#define HASH(id) (((unsigned long)id) % NHASH)

struct foo *fh[NHASH];

pthread_mutex_t hashlock = PTHREAD_MUTEX_INITIALIZER;

struct foo {
        int             f_count;
        pthread_mutex_t f_lock;
        int             f_id;
        struct foo     *f_next;  // protected by hashlock
};

struct foo *foo_alloc(int id) {
        struct foo *fp;
        int         idx;

        if ((fp = malloc(sizeof(struct foo))) != NULL) {
                if (pthread_mutex_init(&fp->f_lock, NULL) != 0) {
                        free(fp);
                        return (NULL);
                }
                fp->f_count = 1;
                fp->f_id    = id;

                idx = HASH(id);
                pthread_mutex_lock(&hashlock);
                fp->f_next = fh[idx];
                pthread_mutex_lock(&fp->f_lock);
                pthread_mutex_unlock(&hashlock);
                // continue initialization
                pthread_mutex_unlock(&fp->f_lock);
        }

        return (fp);
}

void foo_hold(struct foo *fp) {
        pthread_mutex_lock(&fp->f_lock);
        fp->f_count++;
        pthread_mutex_unlock(&fp->f_lock);
}

struct foo *foo_find(int id) {
        struct foo *fp;

        pthread_mutex_lock(&hashlock);
        for (fp = fh[HASH(id)]; fp != NULL; fp = fp->f_next) {
                if (fp->f_id == id) {
                        foo_hold(fp);
                        break;
                }
        }

        pthread_mutex_unlock(&hashlock);
        return (fp);
}

// release a reference to the object
void foo_rele(struct foo *fp) {
        struct foo *tfp;
        int         idx;

        pthread_mutex_lock(&fp->f_lock);
        if (fp->f_count == 1) {
                pthread_mutex_unlock(&fp->f_lock);
                pthread_mutex_lock(&hashlock);
                pthread_mutex_lock(&fp->f_lock);
                if (fp->f_count != 1) {
                        fp->f_count--;
                        pthread_mutex_unlock(&fp->f_lock);
                        pthread_mutex_unlock(&hashlock);
                        return;
                }

                idx = HASH(fp->f_id);
                tfp = fh[idx];
                if (tfp == fp) {
                        fh[idx] = fp->f_next;
                } else {
                        while (tfp->f_next != fp) {
                                tfp = tfp->f_next;
                        }
                        tfp->f_next = fp->f_next;
                }
                pthread_mutex_unlock(&hashlock);
                pthread_mutex_unlock(&fp->f_lock);
                pthread_mutex_destroy(&fp->f_lock);
                free(fp);
        } else {
                fp->f_count--;
                pthread_mutex_unlock(&fp->f_lock);
        }
}
