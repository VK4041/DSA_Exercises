// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted
// numbers and an integer. The function should return the index of the integer in the array.
// If the value is not found, return -1.

// Constraints:
// Time Complexity - O(log n)
// Space Complexity - O(1)

function findRotatedIndex(array, num) {
  let len = array.length;
  if (!len) return -1;
  if (num !== 0 && !num) return -1; //num not given

  let start = 0;
  let end = len - 1;
  let mid;
  let index = -1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[start] === num) return start;
    if (array[mid] === num) return mid;
    if (array[end] === num) return end;
    //When first half is sorted
    if (array[start] <= array[mid]) {
      //Num in range
      if (num >= array[start] && num <= array[mid]) {
        end = mid - 1;
      }
      //Num not in range
      else start = mid + 1;
    }
    //Second half sorted
    else {
      if (num >= array[mid] && num <= array[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return index;
}
// Target is the smallest element at the rotation point
console.log(findRotatedIndex([5, 6, 7, 1, 2, 3, 4], 1)); // 3
console.log(findRotatedIndex([8, 9, 10, 1, 2, 3], 1)); // 3
console.log(findRotatedIndex([15, 16, 17, 18, 1, 2], 1)); // 4

// Target is in the smaller values after rotation
console.log(findRotatedIndex([6, 7, 8, 1, 2, 3, 4, 5], 2)); // 4
console.log(findRotatedIndex([10, 11, 12, 1, 2, 3, 4], 3)); // 5
console.log(findRotatedIndex([20, 21, 22, 1, 2, 3], 2)); // 4

// Target is in the larger values before rotation point
console.log(findRotatedIndex([50, 60, 70, 1, 2, 3, 4], 60)); // 1
console.log(findRotatedIndex([100, 200, 1, 2, 3, 4], 200)); // 1
console.log(findRotatedIndex([40, 50, 60, 10, 20, 30], 50)); // 1

// Target right at edges of rotation
console.log(findRotatedIndex([5, 6, 7, 8, 1, 2, 3], 8)); // 3 (last before rotation)
console.log(findRotatedIndex([5, 6, 7, 8, 1, 2, 3], 1)); // 4 (first after rotation)
