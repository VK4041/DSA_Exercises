// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers
// and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time Complexity: O(N)
// Space Complexity: O(1)

function averagePair(array, target) {
  let len = array.length;
  if (len < 2) return false;
  for (let i = 0, j = len - 1; i !== j; ) {
    let mean = (array[i] + array[j]) / 2;
    if (mean === target) return [array[i], array[j]];
    else if (mean < target) i++;
    else j--;
  }
}
console.log(averagePair([2, 4, 6, 8, 10, 12, 13, 20], 8));
