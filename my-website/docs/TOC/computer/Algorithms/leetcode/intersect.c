int compare(void *a, void *b)
{
	return *(int*)a - *(int*)b;
}

int* intersect(int* nums1, int nums1Size, int* nums2, int nums2Size,
               int* returnSize) {
  int* returnValues = malloc(sizeof(int) * fmin(nums1Size, nums2Size));
  *returnSize = 0;

  qsort(nums1, nums1Size, sizeof(int), compare);
  qsort(nums2, nums2Size, sizeof(int), compare);

  int i = 0, j = 0;

  while (i < nums1Size && j < nums2Size) {
    if (nums1[i] == nums2[j]) {
      returnValues[(*returnSize)++] = nums1[i];

      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return returnValues;
}
