// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(array, winSize) {
  if (!winSize || winSize > array.length) return null;
  if (winSize === array.length) {
    let sum = 0;
    for (let value of array) {
      sum += value;
    }
    return sum;
  }
  let maxSum = 0,
    temp = 0,
    i = 0;
  for (; i < winSize; i++) {
    maxSum += array[i];
  }
  temp = maxSum;
  //i is already equal to winSize
  for (; i < array.length; i++) {
    temp += array[i] - array[i - winSize];
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubarraySum([1, -1, 1, -1, 1, -1], 2));
