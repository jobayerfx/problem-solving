function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let fact = 1;
    for (i = n; i > 0; i--) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// Big-O  == O(n)