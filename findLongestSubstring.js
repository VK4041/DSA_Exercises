// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.
// Time Complexity - O(n)

function findLongestSubstring(string) {
  if (!string.length) return 0;
  if (string.length === 1) return 1;

  let i = 0;
  let j = 0;
  let tempCount = 0;
  let maxLen = 0;
  let tempDictionary = {};

  while (j < string.length) {
    if (string[j] in tempDictionary) {
      delete tempDictionary[string[i]];
      i++;
      tempCount--;
    } else {
      tempDictionary[string[j]] = 1;
      j++;
      tempCount++;
    }
    maxLen = Math.max(maxLen, tempCount);
  }
  return maxLen;
}

console.log(findLongestSubstring("aAb!aAba1234!@#")); // expected 10
console.log(findLongestSubstring("abcaefghija")); // expected 9
console.log(findLongestSubstring("ab!@#cd^&*()efg!@#hijkl")); // expected 18
console.log(findLongestSubstring("pwwkew")); // expected 3
console.log(findLongestSubstring("dvdf")); // expected 3
console.log(findLongestSubstring("0123456789012345")); // expected 10
console.log(findLongestSubstring("abcdefghijklmnopqrstuvwxyzA")); // expected 27
console.log(findLongestSubstring("   ")); // expected 1
console.log(findLongestSubstring("a1!A2@b#B3$c%")); // expected 13
