var findSubstring = function(s, words) {
    function getPermutations(arr) {
        const result = [];
        function swap(a, b) {
            const temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
        function generate(n) {
            if (n === 1) {
            result.push([...arr]);
            } else {
            for (let i = 0; i < n; i++) {
                generate(n - 1);
                if (n % 2 === 0) {
                swap(i, n - 1);
                } else {
                swap(0, n - 1);
                }
            }
            }
        }
        generate(arr.length);
        return result.map(perm => perm.join(''));
    }
    function findIndexes(string, char) {
        return string.split('').map((c, idx) => {
            if (c === char) {
                return idx;
            }
            return -1;
            }).filter(element => element !== -1);
    }
    const permutations = getPermutations(words);
    let result = [];
    for (item of permutations) {
        let index = s.indexOf(item);
        if (index !== -1) result.push(index);
    }
    return result.filter((value, index, array) => array.indexOf(value) === index);;
};