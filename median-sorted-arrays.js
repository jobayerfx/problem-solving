// 4. Median of Two Sorted Arrays | https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2);
  const mid = Math.floor(merged.length / 2);
   const sortedArr = merged.sort((a, b) => a - b);
   if (merged.length % 2 === 0) {
      return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
   } else {
      return sortedArr[mid];
   }
};