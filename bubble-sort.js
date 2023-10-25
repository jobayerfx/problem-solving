function bubbleSort(arr) {
    let swap
    do {
        swap = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    } while (swap)
}
const arr = [8, 20, -2, 4, -6];
bubbleSort(arr)
console.log(arr)

// Big-O  =  O(n^2)
