// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function
// called sortedFrequency that counts the occurrences of the number in the array

// Time Complexity - O(log n)

function sortedFrequency(sortedArr, num) {
  let len = sortedArr.length;
  if (!len || !num) return 0; //no number or no array

  let start = 0;
  let end = len - 1;
  let mid;
  let first = -1;
  let last = -1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] === num) {
      //Finding first instance of num
      if (sortedArr[mid - 1] !== num) {
        first = mid;
        break;
      } else end = mid - 1;
    } else if (sortedArr[mid] > num) end = mid - 1;
    else start = mid + 1;
  }
  start = 0;
  end = len - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] === num) {
      //Finding last instance of num
      if (sortedArr[mid + 1] !== num) {
        last = mid;
        break;
      } else start = mid + 1;
    } else if (sortedArr[mid] > num) end = mid - 1;
    else start = mid + 1;
  }
  //If num was not found
  if (first < 0) return 0;

  //Return number of occurences
  return last - first + 1;
}
//Test inputs generated from MS Copilot

// 🔁 Repeated values in the middle
console.log(sortedFrequency([1, 2, 3, 3, 3, 4, 5], 3)); // Expected: 3

// 🧊 Target at the start
console.log(sortedFrequency([2, 2, 2, 3, 4, 5, 6], 2)); // Expected: 3

// 🔚 Target at the end
console.log(sortedFrequency([1, 2, 3, 4, 5, 6, 6, 6], 6)); // Expected: 3

// ❌ Target not present
console.log(sortedFrequency([10, 20, 30, 40, 50], 25)); // Expected: 0

// 🧮 Single match in large array
console.log(sortedFrequency([1, 2, 3, ...Array(99997).fill(4)], 3)); // Expected: 1

// 🧍‍♂️ Only one element, match
console.log(sortedFrequency([42], 42)); // Expected: 1

// 🧍‍♀️ Only one element, no match
console.log(sortedFrequency([42], 7)); // Expected: 0

// 🆓 Empty array
console.log(sortedFrequency([], 5)); // Expected: 0

// 🔢 Alternating pattern
console.log(
  sortedFrequency(
    [1, 2, 1, 2, 1, 2, 1, 2].sort((a, b) => a - b),
    1
  )
); // Expected: 4

// 🧱 Large block of matches
console.log(
  sortedFrequency(Array(50000).fill(8).concat(Array(50000).fill(9)), 8)
); // Expected: 50000
