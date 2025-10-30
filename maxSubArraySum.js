//Write a function that takes in an unsorted integer array and a number (size of window). Then, return the largest sub array sum.

function maxSubArraySum(array, num) {
  let len = array.length;
  if (len < num) return null;

  let maxSum = 0;
  let temp = 0;
  let i = 0;
  for (; i < num; i++) {
    maxSum += array[i];
  }
  temp = maxSum;
  //i is already = num now
  for (; i < len; i++) {
    temp += array[i] - array[i - num]; //add next digit and subtract previous
    maxSum = Math.max(maxSum, temp);
  }
  return maxSum;
}
//O(n) solution
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubArraySum([1, -1, 1, -1, 1, -1], 2));
