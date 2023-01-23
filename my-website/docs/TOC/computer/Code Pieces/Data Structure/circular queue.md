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
#endif
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
#define SHMQ_ERR_INDEX_OUTRANGE -6

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

static int
__shmq_set_settings(struct shmqueue *q, const int size, const int width)
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

static bool __shmq_index_check(const struct shmqueue *q)
{
	bool ok = false;

	if (!shmq_check_memory(q)) {
		return false;
	}

	ok = (q->front >= -1 && q->front < q->size) &&
	     (q->rear >= -1 && q->rear < q->size);

	if (!ok) {
		shmq_errnum = SHMQ_ERR_INDEX_OUTRANGE;
	}

	return ok;
}

bool shmq_check_memory(const struct shmqueue *q)
{
	bool ok = __shmq_mmap_check(q) && __shmq_mmap_check(q->data);
	if (!ok) {
		shmq_errnum = SHMQ_ERR_MEM_CHECK_FAIL;
	}

	return ok;
}

void shmq_free_memory(struct shmqueue **q)
{
	if (__shmq_mmap_check(*q)) {
		if (__shmq_mmap_check((*q)->data)) {
			munmap((*q)->data, ((*q)->size+1) * (*q)->width);
			(*q)->data = NULL;
		}
		munmap(*q, sizeof(**q));
		*q = NULL;
	}
}

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

	q = mmap(NULL,
		 sizeof(*q),
		 PROT_READ | PROT_WRITE,
		 MAP_SHARED | MAP_FILE,
		 shmid1,
		 0);
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

	ret = ftruncate(shmid2, (size+1) * width);
	if (ret == -1) {
		shmq_errnum = SHMQ_ERR_TRUNC;
		goto null_return;
	}

	q->data = mmap(NULL,
		       (size + 1) * width,
		       PROT_READ | PROT_WRITE,
		       MAP_SHARED | MAP_FILE,
		       shmid2,
		       0);
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

int shmq_size(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->size;
	}
	return -1;
}

int shmq_front(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->front;
	}
	return -1;
}

int shmq_rear(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->rear;
	}
	return -1;
}

int shmq_width(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return q->width;
	}
	return -1;
}

bool shmq_isfull(const struct shmqueue *q)
{
	return (shmq_check_memory(q) && q->front != -1 && (q->rear + 1) % q->size == q->front);
}

bool shmq_isempty(const struct shmqueue *q)
{
	return shmq_check_memory(q) && (q->front == -1);
}

int shmq_data_total_memory(const struct shmqueue *q)
{
	if (shmq_check_memory(q)) {
		return shmq_size(q) * shmq_width(q);
	}
	return -1;
}

void *shmq_dequeue(struct shmqueue *q)
{
	void *ptr = NULL;

	if (shmq_check_memory(q) && q->front != -1) {
		mlock(q, sizeof(*q));
		mlock(q->data, (q->size + 1) * q->width);

		ptr = q->data + (q->front * q->width);

		if (q->front == q->rear) {
			q->front = q->rear = -1;
		} else {
			q->front = (q->front + 1) % q->size;
		}

		munlock(q, sizeof(*q));
		munlock(q->data, (q->size + 1) * q->width);

		return ptr;
	}

	return NULL;
}

int shmq_enqueue(struct shmqueue *q, const void *data)
{
	if (!shmq_check_memory(q)) {
		return -1;
	}

	mlock(q, sizeof(*q));
	mlock(q->data, (q->size + 1) * q->width);

	if (shmq_isfull(q)) {
		shmq_dequeue(q);
	} else if (q->front == -1) {
		q->front = 0;
	}

	q->rear = (q->rear + 1) % q->size;

	if (!__shmq_index_check(q)) {
		return -1;
	}

	memcpy((char*)q->data + (q->rear * q->width), data, q->width);
	msync(q->data, (q->size + 1) * q->width, MS_SYNC);

	munlock(q->data, (q->size + 1) * q->width);
	munlock(q, sizeof(*q));

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
		shmq_errnum = SHMQ_ERR_DATA_DUP;
		return -1;
	}

	return shmq_enqueue(q, data);
}

void *shmq_data_at(const struct shmqueue *q, const int idx)
{
	if (shmq_check_memory(q) == false || q->front == -1) {
		return NULL;
	}

	return (char *)q->data + idx * (q->width);
}

bool shmq_has_data(const struct shmqueue *q,
		   const void	      *data,
		   int (*compar)(const void *, const void *, size_t n))
{
	bool ok;
	if (!shmq_check_memory(q) || shmq_isempty(q)) {
		return false;
	}

	mlock(q->data, (q->size + 1) * q->width);
	mlock(q, sizeof(*q));

	int i = q->rear;
	if ((ok = (compar(shmq_data_at(q, i), data, q->width) == 0))) {
		goto finish;
	}

	for (i = q->front; i != q->rear; i = (i + 1) % q->size) {
		if ((ok = (compar(shmq_data_at(q, i), data, q->width) == 0))) {
			goto finish;
		}
	}

finish:

	munlock(q->data, (q->size + 1) * q->width);
	munlock(q, sizeof(*q));

	return ok;
}

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

	case SHMQ_ERR_INDEX_OUTRANGE:
		snprintf(
		    errmsg, sizeof(errmsg), "check shmqueue index failed\n");
		break;

	default:
		snprintf(errmsg, sizeof(errmsg), "%s", "success");
		break;
	}

	return errmsg;
}
```
