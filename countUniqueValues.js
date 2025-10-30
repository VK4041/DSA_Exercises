//Create a function that inputs a sorted array and returns the number of unique values in it.

function countUniqueValues(array) {
  let i = 0;
  let j = i + 1;
  if (!array.length) return 0; //empty array has no unique values at all
  let uniqueArr = [array[i]];
  let count = 1; //otherwise, atleast 1 unique value must be there
  while (j < array.length) {
    if (array[i] !== array[j]) {
      uniqueArr.push(array[j]);
      count++;
      i = j;
    }
    j++;
  }
  return [count, uniqueArr];
}
console.log(countUniqueValues([1, 1, 3, 4, 7, 7, 7]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([5]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
