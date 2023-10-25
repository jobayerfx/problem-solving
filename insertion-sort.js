function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let insertNumber = arr[i]
        let j = i -1

        while(j >= 0 && arr[j] > insertNumber) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = insertNumber
    }
}
const arr = [8, 20, -2, 4, -6];
insertionSort(arr)
console.log(arr)

// Big-O  =  O(n^2)
