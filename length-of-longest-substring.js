// 3. Longest Substring Without Repeating Characters  | https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0; // Initialize the maximum length to 0.
  let start = 0; // Initialize the start pointer.

  // Create a map to store the index of each character's last occurrence.
  const charIndexMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      // If the character is repeated and its last occurrence is after or at the start pointer,
      // update the start pointer to the next position of the previous occurrence.
      start = charIndexMap.get(char) + 1;
    }

    // Update the last occurrence index of the character in the map.
    charIndexMap.set(char, end);

    // Calculate the current substring length.
    const currentLength = end - start + 1;

    // Update the maximum length if the current substring is longer.
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
