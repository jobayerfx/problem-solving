// Write a program that takes an integer 'n' as input and calculates the sum of the series, returning the result.

// Input:

// An integer 'n' (1 <= n <= 1000).
// Output:

// The result of the series calculation.
// Example:
// For n = 10, the series is: 1 + 2 + 3 - 4 + 5 + 6 - 7 + 8 + 9 - 10.
// The program should calculate this series and output the result, which is 13.

// Note: The series always starts with addition, followed by subtraction, and so on, regardless of the value of 'n'.
function calculateAlternatingSum(n) {
    if (n==1) return 1;
    let sum = 1;
    for (let i = 1; i <= n; i++) {
    if (i==1) continue;
      if((i-1)%3==0)
        sum -= i;
      else
        sum += i;
    }
    return sum;
  }
  
  // Example usage:
  const n = 10;
  const seriesSum = calculateAlternatingSum(n);
  console.log(`The sum of the series for n=${n} is ${seriesSum}`);