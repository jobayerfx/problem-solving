// 14. Longest Common Prefix | https://leetcode.com/problems/longest-common-prefix/description/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
    return ""; // If the array is empty, return an empty string
  }
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentStr = strs[i];
    let j = 0;
    while (j < prefix.length && j < currentStr.length && prefix[j] === currentStr[j]) {
      j++;
    }
    prefix = prefix.substring(0, j);
    if (prefix === "") {
      return "";
    }
  }
  return prefix;
};