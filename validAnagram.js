/////////////// Frequency Counter Coding Exercise 1: - validAnagram //////////////////////////////

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
// formed from iceman.

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let letter of string1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of string2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  for (letter in frequencyCounter1) {
    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) return false;
  }
  return true;
}
console.log(isAnagram("anagram", "nagaram"));
