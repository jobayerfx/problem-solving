// 12. Integer to Roman | https://leetcode.com/problems/integer-to-roman/description/

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

/**
 * @param {number} num
 * @return {string}
 */
let sign = [];
sign['M'] = 1000;
sign['CM'] = 900;
sign['D'] = 500;
sign['CD'] = 400;
sign['C'] = 100;
sign['XC'] = 90;
sign['L'] = 50;
sign['XL'] = 40;
sign['X'] = 10;
sign['IX'] = 9;
sign['V'] = 5;
sign['IV'] = 4;
sign['I'] = 1;
let intToRoman = function(num) {
  for (let key in sign) {
    if (sign[key] <= num) {
      const quotient = Math.floor(num/sign[key]);
      const str = (quotient>1) ? key.repeat(quotient) : key;
      const remainder = num%sign[key];
      if (remainder>0) {
          return  str + intToRoman(remainder);
      }
      else {
          return str;
      }
      breack;
    }
  }
};