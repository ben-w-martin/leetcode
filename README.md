### 643 - [Max Average Subarray](https://github.com/ben-w-martin/leetcode/blob/master/typescript/max-avg-subarray.ts) - June 9, 2024

  1. The function has two loops.
  2. The first loop finds the sum of the initial subarray, beginning with index 0 to the index k.
  3. Rather than continuing to perform iterating operations to find future sums, the first sum is used in the second loop as a starting point.
  4. The previous index is subtracted, and the first index past i + k is added.
  5. The average is calculated and compared with the max for each iteration.
