//50. Pow(x, n) | https://leetcode.com/problems/powx-n/
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 
// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


let myPow = function(x, n) {
    if (x == 1) return 1;
    let temp = 1;
    let abs = Math.abs(n);
    while(abs){
        temp *= x;
        abs--;
    }
    if (n<0) {
        return 1/temp;
    }
    return temp;
};

console.log(myPow(2.1, 4));     //19.448100000000004