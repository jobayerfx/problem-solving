// 30. Substring with Concatenation of All Words

// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]
// Output: [0,9]
// Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
// The output order does not matter. Returning [9,0] is fine too.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) {
      return [];
    }
  
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const wordCountMap = new Map();
    const result = [];
  
    for (const word of words) {
      if (wordCountMap.has(word)) {
        wordCountMap.set(word, wordCountMap.get(word) + 1);
      } else {
        wordCountMap.set(word, 1);
      }
  
      for (let i = 0; i < wordLength; i++) {
        let left = i;
        const currentWordMap = new Map();
  
        for (let j = i; j <= s.length - wordLength; j += wordLength) {
          const word = s.substr(j, wordLength);
  
          if (wordCountMap.has(word)) {
            currentWordMap.set(word, (currentWordMap.get(word) || 0) + 1);
  
            while (currentWordMap.get(word) > wordCountMap.get(word)) {
              const leftWord = s.substr(left, wordLength);
              currentWordMap.set(leftWord, currentWordMap.get(leftWord) - 1);
              left += wordLength;
            }
  
            if (j - left === totalLength - wordLength) {
              result.push(left);
            }
          } else {
            currentWordMap.clear();
            left = j + wordLength;
          }
        }
      }
    }
  
    return result;
  };
  
  
  
console.log(findSubstring("barfoothefoobarman", 
["foo","bar"]));
