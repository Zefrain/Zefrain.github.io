#include "shmqueue.h"

#define SHMQ_ERR_OPEN  -1
#define SHMQ_ERR_TRUNC -2
#define SHMQ_ERR_MMAP  -3

struct queue {
	int size;
	int front;
	int rear;
	int width;
	void *data;
};

_Thread_local shmq_errno;

int shmq_init_settings(struct shmqueue *q, int size, int width)
{
	if (!q) {
		return;
	}

	q->size = size;
	q->front = -1;
	q->rear = -1;
	q->width = width;
}

void shmq_free_memory(struct shmqueue **q)
{
	if (*q) {
		if (q->data) {
			munmap(*q, (*q)->size * (*q)->width);
			(*q)->data = NULL;
		}
		munmap(*q, sizeof(**q));
		*q = NULL;
	}
}

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

	shmid1 = shm_open(shmqselfname, O_CREAT | O_RDWR, S_ISUSR | S_IWUSER);
	if (shmid1 == -1) {
		shmq_errno = SHMQ_ERR_OPEN;
		goto null_return;
	}

	ret = ftruncate(shmid1, sizeof(*q));
	if (ret == -1) {
		shmq_errno = SHMQ_ERR_TRUNC;
		goto null_return;
	}

	q = mmap(
	    NULL, sizeof(*q), PROT_READ | PROT_WRITE, MAP_SHARED, shmid1, 0);
	if (!q) {
		shmq_errno = SHMQ_ERR_MMAP;
		goto null_return;
	}

	if (q->size != size || q->width != width) {
		shmq_init_settings(q, size, width);
	}

	shmid2 = shm_open(shmqdataname, O_CREAT | O_RDWR, S_ISUSR | S_IWUSER);
	if (shmid2 == -1) {
		shmq_errno = SHMQ_ERR_OPEN;
		goto null_return;
	}

	ret = ftruncate(shmid2, size * width);
	if (ret == -1) {
		shmq_errno = SHMQ_ERR_TRUNC;
		goto null_return;
	}

	q->data = mmap(
	    NULL, size * width, PROT_READ | PROT_WRITE, MAP_SHARED, shmid2, 0);
	if (!q) {
		shmq_errno = SHMQ_ERR_MMAP;
		goto null_return;
	}

null_return:
	if (q)
		shmq_free_memory(&q);
	return NULL;
}

int shmq_size(struct shmqueue *q)
{
	if (q) {
		return q->size;
	}
	return -1;
}

int shmq_front(struct shmqueue *q)
{
	if (q) {
		return q->front;
	}
	return -1;
}

int shmq_rear(struct shmqueue *q)
{
	if (q) {
		return q->rear;
	}
	return -1;
}

int shmq_width(struct shmqueue *q)
{
	if (q) {
		return q->width;
	}
	return -1;
}

