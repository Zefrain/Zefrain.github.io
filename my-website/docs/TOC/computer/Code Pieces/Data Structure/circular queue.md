# Circular Queue && Shared Memory #

```c
#include "shmqueue.h"
#include <stdbool.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <stddef.h>
#include <string.h>
#include <unistd.h>
#include <stdio.h>

#define SHMQ_ERR_OPEN	   -1
#define SHMQ_ERR_TRUNC	   -2
#define SHMQ_ERR_MMAP	   -3
#define SHMQ_ERR_MEM_CHECK -4

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
int shmq_init_settings(struct shmqueue *q, int size, int width)
{
	if (!q) {
		return -1;
	}

	q->size = size;
	q->front = -1;
	q->rear = -1;
	q->width = width;
}

static bool __shmq_mmap_check(void *ptr)
{
	return ptr && ptr != MMAP_FAILED;
}

/**
 * check whether queue memory is valid
 */
bool shmq_check_memory(const struct shmqueue *q)
{
	return __shmq_mmap_check(q) && __shmq_mmap_check(q->data);
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
struct shmqueue *shmq_get_memory(const char *filename, int size, int width)
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
		shmq_init_settings(q, size, width);
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
int shmq_size(struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->size;
	}
	return -1;
}

/**
 * return front pointer
 */
int shmq_front(struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->front;
	}
	return -1;
}

/**
 * return rear pointer
 */
int shmq_rear(struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->rear;
	}
	return -1;
}

/**
 * return each element size
 */
int shmq_width(struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->width;
	}
	return -1;
}

/**
 * check whether queue is full
 */
bool shmq_isfull(struct shmqueue *q)
{
	return (shmq_check_memory(q) && (q->rear + 1) % q->size == q->front);
}

/**
 * check whether queue is empty
 * FIXME: condition is not enough
 */
bool shmq_isempty(struct shmqueue *q)
{
	return shmq_check_memory(q) && (q->front == -1);
}

/**
 * caculate data memory
 */
int shmq_data_memory(struct shmqueue *q)
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
int shmq_enqueue(struct shmqueue *q, void *data)
{
	if (shmq_check_memory(q)) {
		return -1;
	}

	if (shmq_isfull(q)) {
		shmq_dequeue(q);
	} else if (q->front == -1) {
		q->front = 0;
	}

	q->rear = (q->rear + 1) % q->size;
	memcpy(q->data+(q->rear * q->width), data, q->width);
}

/**
 * get error message
 */
char *shmq_strerror()
{
	switch (shmq_errnum) {
	case SHMQ_ERR_OPEN:
		return "shm_open failed";

	case SHMQ_ERR_TRUNC:
		return "ftruncate failed";

	case SHMQ_ERR_MMAP:
		return "mmap failed";

	case SHMQ_ERR_MEM_CHECK_FAIL:
		return "shmq_check_memory failed";

	default:
		return "success";
	}
}

/**
 * get data at specified index
 */
void *shmq_data_at(const struct shmqueue *q, int idx)
{
	if (shmq_check_memory(q) || q->front == -1) {
		return NULL;
	}

	return q->data + idx*(q->width);
}
```
