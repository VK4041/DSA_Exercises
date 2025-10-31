// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(string1, string2) {
  if (!string1) return true; //Edge Case1: If string1 isn't given
  if (string1 && !string2) return false; //Edge Case2: If string1 is there but string 2 isn't
  let i = 0,
    j = 0;
  while (j < string1.length && i < string2.length) {
    if (string2[i] === string1[j]) j++;
    i++;
  }
  if (j === string1.length) return true;
  else return false;
}
//Time: O(n+m)
//Space: O(1)
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true
