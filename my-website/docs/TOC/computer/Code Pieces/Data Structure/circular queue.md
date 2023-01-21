# Circular Queue && Shared Memory #

## Definitions ##

- `shmqueue.h`:

```c
#ifndef SHMQUEUE_H
#define SHMQUEUE_H

#include <stdbool.h>
#include <stddef.h>

struct shmqueue;

bool shmq_check_memory(const struct shmqueue *q);
void shmq_free_memory(struct shmqueue **q);
struct shmqueue *
shmq_get_memory(const char *filename, const int size, const int width);

int shmq_data_total_memory(const struct shmqueue *q);

int shmq_size(const struct shmqueue *q);
int shmq_front(const struct shmqueue *q);
int shmq_rear(const struct shmqueue *q);
int shmq_width(const struct shmqueue *q);
void *shmq_data_at(const struct shmqueue *q, const int idx);

bool shmq_isfull(const struct shmqueue *q);
bool shmq_isempty(const struct shmqueue *q);

void *shmq_dequeue(struct shmqueue *q);
int shmq_enqueue(struct shmqueue *q, const void *data);

bool shmq_has_data(const struct shmqueue *q,
		   const void *data,
		   int (*compar)(const void *, const void *, size_t n));

int shmq_enqueue_unique(struct shmqueue *q,
			const void *data,
			int (*compar)(const void *, const void *, size_t n));

const char *shmq_strerror();
#
```

## Implementations ##

- `shmqueue.c`

```c
#include "shmqueue.h"
#include <stdbool.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <string.h>
#include <unistd.h>
#include <stdio.h>
#include <errno.h>

#define SHMQ_ERR_OPEN		-1
#define SHMQ_ERR_TRUNC		-2
#define SHMQ_ERR_MMAP		-3
#define SHMQ_ERR_MEM_CHECK_FAIL -4
#define SHMQ_ERR_DATA_DUP	-5

#ifndef NAME_MAX
#define NAME_MAX 255
#endif

struct shmqueue {
	int size;
	int front;
	int rear;
	int width;
	void *data;
};

__thread int shmq_errnum;

/**
 * init queue struct settings
 */
static int __shmq_set_settings(struct shmqueue *q,const int size, const int width)
{
	if (!q) {
		return -1;
	}

	q->size = size;
	q->front = -1;
	q->rear = -1;
	q->width = width;
}

static bool __shmq_mmap_check(const void *ptr)
{
	return ptr && ptr != MAP_FAILED;
}

/**
 * check whether queue memory is valid
 */
bool shmq_check_memory(const struct shmqueue *q)
{
	bool ok = __shmq_mmap_check(q) && __shmq_mmap_check(q->data);
	if (ok == false) {
		shmq_errnum = SHMQ_ERR_MEM_CHECK_FAIL;
	}

	return ok;
}

/**
 * free queue memory
 */
void shmq_free_memory(struct shmqueue **q)
{
	if (__shmq_mmap_check(*q)) {
		if (__shmq_mmap_check((*q)->data)) {
			munmap((*q)->data, (*q)->size * (*q)->width);
			(*q)->data = NULL;
		}
		munmap(*q, sizeof(**q));
		*q = NULL;
	}
}

/**
 * apply memory for queue
 */
struct shmqueue *
shmq_get_memory(const char *filename, const int size, const int width)
{
	char *ptr = NULL;
	int shmid1, shmid2;
	char shmqselfname[NAME_MAX], shmqdataname[NAME_MAX];
	struct shmqueue *q = NULL;
	int ret = 0;

	if (!filename || !filename[0]) {
		goto null_return;
	}

	ptr = strrchr(filename, '/');
	if (ptr) {
		snprintf(shmqselfname, NAME_MAX, "%s", ptr + 1);
		snprintf(shmqdataname, NAME_MAX, "%s.", ptr + 1);
	} else {
		snprintf(shmqselfname, NAME_MAX, "%s", filename);
		snprintf(shmqdataname, NAME_MAX, "%s.", filename);
	}

	shmid1 = shm_open(shmqselfname, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
	if (shmid1 == -1) {
		shmq_errnum = SHMQ_ERR_OPEN;
		goto null_return;
	}

	ret = ftruncate(shmid1, sizeof(*q));
	if (ret == -1) {
		shmq_errnum = SHMQ_ERR_TRUNC;
		goto null_return;
	}

	q = mmap(
	    NULL, sizeof(*q), PROT_READ | PROT_WRITE, MAP_SHARED, shmid1, 0);
	if (!q) {
		shmq_errnum = SHMQ_ERR_MMAP;
		goto null_return;
	}

	if (q->size != size || q->width != width) {
		__shmq_set_settings(q, size, width);
	}

	shmid2 = shm_open(shmqdataname, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR);
	if (shmid2 == -1) {
		shmq_errnum = SHMQ_ERR_OPEN;
		goto null_return;
	}

	ret = ftruncate(shmid2, size * width);
	if (ret == -1) {
		shmq_errnum = SHMQ_ERR_TRUNC;
		goto null_return;
	}

	q->data = mmap(
	    NULL, size * width, PROT_READ | PROT_WRITE, MAP_SHARED, shmid2, 0);
	if (!q) {
		shmq_errnum = SHMQ_ERR_MMAP;
		goto null_return;
	}

ok:
	return q;

null_return:
	if (shmq_check_memory(q))
		shmq_free_memory(&q);
	return NULL;
}

/**
 * return elements number
 */
int shmq_size(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->size;
	}
	return -1;
}

/**
 * return front pointer
 */
int shmq_front(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->front;
	}
	return -1;
}

/**
 * return rear pointer
 */
int shmq_rear(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->rear;
	}
	return -1;
}

/**
 * return each element size
 */
int shmq_width(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->width;
	}
	return -1;
}

/**
 * check whether queue is full
 */
bool shmq_isfull(const struct shmqueue *q)
{
	return (shmq_check_memory(q) && q->front != -1 && (q->rear + 1) % q->size == q->front);
}

/**
 * check whether queue is empty
 * FIXME: condition is not enough
 */
bool shmq_isempty(const struct shmqueue *q)
{
	return shmq_check_memory(q) && (q->front == -1);
}

/**
 * caculate data memory
 */
int shmq_data_total_memory(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return shmq_size(q) * shmq_width(q);
	}
	return -1;
}

/**
 * dequeue from queue
 */
void *shmq_dequeue(struct shmqueue *q)
{
	void *ptr = NULL;
	if (shmq_check_memory(q) && q->front != -1) {
		ptr = q->data + (q->front * q->width);

		if (q->front == q->rear) {
			q->front = q->rear = -1;
		}  else {
			q->front = (q->front + 1) % q->size;
		}
		return ptr;
	}

	return NULL;
}

/**
 * enqueue to queue
 */
int shmq_enqueue(struct shmqueue *q, const void *data)
{
	if (!shmq_check_memory(q)) {
		return -1;
	}

	if (shmq_isfull(q)) {
		shmq_dequeue(q);
	} else if (q->front == -1) {
		q->front = 0;
	}

	q->rear = (q->rear + 1) % q->size;
	memcpy(q->data+(q->rear * q->width), data, q->width);
	return q->rear;
}

int shmq_enqueue_unique(struct shmqueue *q,
			const void *data,
			int (*compar)(const void *, const void *, size_t n))
{
	if (!shmq_check_memory(q)) {
		return -1;
	}

	if (shmq_has_data(q, data, compar)) {
		return q->rear;
	}

	return shmq_enqueue(q, data);
}

/**
 * get data at specified index
 */
void *shmq_data_at(const struct shmqueue *q, const int idx)
{
	if (shmq_check_memory(q) == false || q->front == -1) {
		return NULL;
	}

	return q->data + idx*(q->width);
}

bool shmq_has_data(const struct shmqueue *q,
		   const void *data,
		   int (*compar)(const void *, const void *, size_t n))
{
	if (!shmq_check_memory(q) || shmq_isempty(q)) {
		return false;
	}

	int i = q->rear;
	if (compar(shmq_data_at(q, i), data, q->width) == 0) {
		shmq_errnum = SHMQ_ERR_DATA_DUP;
		return true;
	}

	for (i = q->front; i != q->rear; i = (i + 1) % q->size) {
		if (compar(shmq_data_at(q, i), data, q->width) == 0) {
			shmq_errnum = SHMQ_ERR_DATA_DUP;
			return true;
		}
	}

	return false;
}

/**
 * get error message
 */
const char *shmq_strerror()
{
	static char errmsg[256] = {0};
	switch (shmq_errnum) {
	case SHMQ_ERR_OPEN:
		snprintf(errmsg,
			 sizeof(errmsg),
			 "%s: %s",
			 "shm_open failed",
			 strerror(errno));
		break;

	case SHMQ_ERR_TRUNC:
		snprintf(errmsg,
			 sizeof(errmsg),
			 "%s: %s",
			 "ftruncate failed",
			 strerror(errno));
		break;

	case SHMQ_ERR_MMAP:
		snprintf(errmsg,
			 sizeof(errmsg),
			 "%s: %s",
			 "mmap failed",
			 strerror(errno));
		break;

	case SHMQ_ERR_MEM_CHECK_FAIL:
		snprintf(errmsg,
			 sizeof(errmsg),
			 "%s: %s",
			 "shmq_check_memory failed",
			 strerror(errno));
		break;

	case SHMQ_ERR_DATA_DUP:
		snprintf(
		    errmsg, sizeof(errmsg), "shmqueue has the same data\n");
		break;

	default:
		snprintf(errmsg, sizeof(errmsg), "%s", "success");
		break;
	}

	return errmsg;
}
```
