#include <stdio.h>
int maxProfit(int *prices, int pricesSize)
{
	int i = 1;
	int mark;
	int maxProfit = 0;

	for(; i < pricesSize-1; ++i)
	{
		mark = i;
		for (int j = i+1; j < pricesSize; ++j) {
			if (prices[mark] < prices[j]) {
				maxProfit +=  prices[j] - prices[mark];
				printf("[%d]: %d\n", mark, maxProfit);
				mark = j;
			}
		}
	}

	if (prices[i-2] < prices[i-1]) {
		maxProfit += prices[i] - prices[i-1];
	}

	printf("[%d] %d\n", i, maxProfit);

	return maxProfit;
}

int main()
{
	int prices[] = {7, 1, 5, 3 ,6, 4};
	maxProfit(prices, sizeof(prices)/sizeof(int));
}
