//Create a function that accepts a sorted array of integers and returns the first pair of elements (as an array) whose sum is equal to 0.
//Use 2 pointer approach
const input = [-3, -2, -1, 0, 1, 2, 5].sort((a, b) => a - b);
function sumZero(array) {
  let i = 0;
  let j = array.length - 1;
  while (i !== j) {
    let sum = array[i] + array[j];
    if (sum === 0) return [array[i], array[j]];
    else if (sum > 0) j--;
    else i++;
  }
}
console.log(sumZero(input));
