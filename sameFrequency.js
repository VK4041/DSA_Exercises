//////// Frequency Counter Coding Exercise 3: - sameFrequency //////////////////////

// Write a function called sameFrequency. Given two positive integers, find out if the two
// numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(num1, num2) {
  let len1 = num1 === 0 ? 1 : Math.floor(Math.log10(num1)) + 1;
  let len2 = num2 === 0 ? 1 : Math.floor(Math.log10(num2)) + 1;
  if (len1 !== len2) return false;

  let digits1 = {};
  let digits2 = {};
  let lastDigit;
  let remainingDigits = num1;
  while (remainingDigits) {
    lastDigit = remainingDigits % 10;
    remainingDigits = Math.floor(remainingDigits / 10);
    digits1[lastDigit] = (digits1[lastDigit] || 0) + 1;
  }
  remainingDigits = num2;
  while (remainingDigits) {
    lastDigit = remainingDigits % 10;
    remainingDigits = Math.floor(remainingDigits / 10);
    digits2[lastDigit] = (digits2[lastDigit] || 0) + 1;
  }
  for (let digit in digits2) {
    if (digits1[digit] !== digits2[digit]) {
      return false;
    }
  }
  return true;
}
// O(N) + O (N) + O(10) = O(N) Good!

// console.log(sameFrequency(3224556, 1004440));
// console.log(sameFrequency(182, 281));           // true
// console.log(sameFrequency(3589578, 5879385));   // true
// console.log(sameFrequency(0, 0));               // true
// console.log(sameFrequency(11, 11));             // true

// console.log(sameFrequency(34, 14));             // false
// console.log(sameFrequency(22, 222));            // false
// console.log(sameFrequency(123, 3214));          // false
// console.log(sameFrequency(112, 1211));          // false

// console.log(sameFrequency(100, 10)); // false
// console.log(sameFrequency(999999, 999999)); // true
// console.log(sameFrequency(1234567890, 9876543210)); // true
// console.log(sameFrequency(1203, 3021)); // true
// console.log(sameFrequency(5005, 5050)); //
