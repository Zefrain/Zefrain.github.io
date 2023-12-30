#include <stdio.h>

int MaxSubsequenceSum(const int A[], int N)
{
	int this, max, i, j, k;
	max = 0;
	for (i = 0; i < N; ++i) {
		for (j = i; j < N; j++) {
			this = 0;
			for (k = i; k <= j; k++) {
				this += A[k];
			}

			if (this > max) {
				max = this;
			}
		}
	}
	return max;
}

int main()
{
	int A[] = {1, 8,-5, 3, 7, 6};
	printf("%d\n", MaxSubsequenceSum(A, sizeof(A)/sizeof(int)));
}
