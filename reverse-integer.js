// 7. Reverse Integer | https://leetcode.com/problems/reverse-integer/description/

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 
// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
  
    // Convert the integer to a string and reverse it
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
  
    // Check if the reversed number is within the 32-bit signed integer range
    const reversedInt = x < 0 ? -parseInt(reversedStr) : parseInt(reversedStr);
  
    if (reversedInt < INT_MIN || reversedInt > INT_MAX) {
      return 0; // Overflow, return 0
    }
  
    return reversedInt;
  };