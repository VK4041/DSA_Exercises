// Frequency Counter or Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements
// in the array whose difference is n. This function should return true
// if the pair exists or false if it does not.

// Solve this with the following requirements:
//1. Multiple Pointers
// Time Complexity - O(n log n)
// Space Complexity - O(1)

//2. Frequency Counter
// Time Complexity - O(n)
// Space Complexity - O(n)

function findPairFreqCounter(unsortedArr, diff) {
  if (unsortedArr.length < 2) return false; //Can't form pair with 0 or 1 elements
  let dictionary = {};
  for (let value of unsortedArr) {
    dictionary[value] = (dictionary[value] || 0) + 1;
    // //Diff is 0, there must be duplicates for true
    if (dictionary[value] > 1 && !diff) return true;
  }
  //Diff is zero but no value was more than 1, so false
  if (!diff) return false;
  for (let key in dictionary) {
    if (Number(key) + Number(diff) in dictionary) {
      return true;
    }
  }
  return false;
}

function findPairMultiplePointers(unsortedArr, diff) {
  if (unsortedArr.length < 2) return false; //Can't form pair with 0 or 1 elements
  //Sorting takes O(nlogn) time
  let sortedArr = unsortedArr.sort((a, b) => a - b);
  for (let i = 0, j = i + 1; i < sortedArr.length && j < sortedArr.length; ) {
    if (i === j) {
      j++;
      continue;
    }
    let calcDiff = Math.abs(sortedArr[j] - sortedArr[i]);
    diff = Math.abs(diff);
    if (calcDiff === diff) return [sortedArr[i], sortedArr[j]];
    else if (calcDiff < diff) j++;
    else i++;
  }
  return false;
}
console.log(findPairMultiplePointers([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); //true
console.log(findPairMultiplePointers([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPairMultiplePointers([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPairMultiplePointers([4, -2, 3, 10], -6)); // true
console.log(findPairMultiplePointers([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPairMultiplePointers([], 0)); // false
console.log(findPairMultiplePointers([5, 5], 0)); // true
console.log(findPairMultiplePointers([-4, 4], -8)); // true
console.log(findPairMultiplePointers([-4, 4], 8)); // true
console.log(findPairMultiplePointers([1, 3, 4, 6], -2)); // true
console.log(findPairMultiplePointers([0, 1, 3, 4, 6], -2)); // true
console.log(findPairMultiplePointers([-2, 5, 10, 15, 16], 0)); // false
console.log(findPairMultiplePointers([2, 3, -1, 0, -1, 5], 2)); //true
