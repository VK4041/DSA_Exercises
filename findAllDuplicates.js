// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

// Time Complexity - O(n)
function findAllDuplicates(array) {
  let duplicates = [];
  let dictionary = {};
  for (let value of array) {
    //If value if encounter twice, add to return array and skip iteration
    if (dictionary[value]) {
      duplicates.push(value);
      continue;
    }
    dictionary[value] = 1;
  }
  return duplicates;
}
console.log(findAllDuplicates([2, 3, 4, 2, 7, 6, 4]));
