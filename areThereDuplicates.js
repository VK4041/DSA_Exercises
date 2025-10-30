/////// Frequency Counter / Multiple Pointers Coding Exercise 4: - areThereDuplicates  /////////////

// Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.  You can solve this using the
// frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...nums) {
  //Frequency Counter Approach O(N)
  //   let counts = {};
  //   for (let value of nums) {
  //     counts[value] = (counts[value] || 0) + 1;
  //     if (counts[value] > 1) return true;
  //   }
  //   return false;
  //Multiple Pointers Approach
  //arguments/array must be sorted beforehand for this approach
  //O(N)
  for (let i = 0, j = 1; j < nums.length; j = i + 1) {
    if (nums[i] === nums[j]) return true;
    i++;
  }
  return false;
}
console.log(areThereDuplicates(-1, 0, 2, 4, 6, 6));
