// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings: a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)

function constructNote(message, letters) {
  if (message && !letters) return false;
  if (!message) return true;

  let lettersDict = {};
  //O(n) time and O(n) space creating letters dictionary with counts
  for (let alphabet of letters) {
    lettersDict[alphabet] = (lettersDict[alphabet] || 0) + 1;
  }
  //O(m) time and O(1) space: For every alphabet of message, there must be a key with defined count value
  for (let alphabet of message) {
    if (!lettersDict[alphabet]) return false;
    //Since letters must supply all repetetions as well.
    lettersDict[alphabet]--;
  }
  return true;
}
//Final time: O(m+n), Space: O(n)
console.log(constructNote("hello", "hleolxyz")); // true
console.log(constructNote("hello", "helo")); // false
console.log(constructNote("abc", "cab")); // true
console.log(constructNote("", "abc")); // true
console.log(constructNote("abc", "")); // false
console.log(constructNote("letter", "tleetrxyz")); // true
console.log(constructNote("letter", "tleerzxyz")); // false (missing one 't')
console.log(constructNote("aaaaabbbbcc", "abcabcabcabcabcabc")); // true
