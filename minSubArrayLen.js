// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(array, target) {
  //Array or target not given
  if (!array.length) return 0;

  let i = 0,
    j = 0,
    tempSum = array[i];
  minLen = Infinity;
  while (j < array.length) {
    if (tempSum < target) {
      tempSum += array[++j];
    } else {
      minLen = Math.min(minLen, j - i + 1);
      tempSum -= array[i++];
    }
  }
  if (minLen === Infinity) minLen = 0;
  return minLen;
}
console.log(minSubArrayLen([7, 2, 5, 1, 8, 3], 15)); // 4 → [7,2,5,1]
console.log(minSubArrayLen([1, 3, 2, 1, 4, 1, 1], 6)); // 2 → [2,4]
console.log(minSubArrayLen([20, 1, 1, 1, 1], 20)); // 1 → [20]
console.log(minSubArrayLen([2, 2, 2, 2, 2, 2], 7)); // 4 → [2,2,2,2]
console.log(minSubArrayLen([5, 1, 9, 2, 1, 8], 10)); // 2 → [9,2]
console.log(minSubArrayLen([100, 200, 300, 400], 500)); // 2 → [100,400] ❌ Wait, check contiguity: contiguous windows are [100,200]=300, [200,300]=500 ✅ minimal length=2 → [200,300]
console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7, 8, 9], 20)); // 4 → [5,6,7,8]
console.log(minSubArrayLen([0, 0, 0, 0, 12], 12)); // 1 → [12]
console.log(minSubArrayLen([1, 1, 2, 3, 5, 8], 11)); // 2 → [3,8]
console.log(minSubArrayLen([6, 1, 1, 1, 1, 1, 1], 8)); // 3 → [6,1,1]
