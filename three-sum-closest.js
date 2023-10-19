// 16. 3Sum Closest | https://leetcode.com/problems/3sum-closest/description/
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 
// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
    let temp;
    function generateTriplets(currentTriplet, startIndex) {
      if (currentTriplet.length === 3) {
          sum = currentTriplet.reduce((partialSum, a) => partialSum + a, 0);
          if (typeof temp == 'undefined') {
              temp = sum;
          }
          if (Math.abs(sum - target) < Math.abs(temp - target)) {
              temp = sum;
          }
        return;
      }
      for (let i = startIndex; i < nums.length; i++) {
        currentTriplet.push(nums[i]);
        generateTriplets(currentTriplet, i + 1);
        currentTriplet.pop();
      }
    }
    generateTriplets([], 0);
    return temp;
  };