
// [2, 1]  -> [1, 2]
//       1 -> 2

// [1, 2, 3] -> [1, 2, 3] ->  [1, 2, 3] -> [1, 2, 3] -> [1, 2, 3]
//         1 - 2       2 - 3        1 - 2          2 - 3
// [1, 3, 2] -> [1, 3, 2] ->  [1, 2, 3] -> [1, 2, 3] -> [1, 2, 3]
//         1 - 3       3 <- 2        1 - 2         2 - 3
// [2, 1, 3] -> [1, 2, 3] ->  [1, 2, 3] -> [1, 2, 3] -> [1, 2, 3]
//         2 <- 1       2 - 3        1 - 2          2 - 3
// [3, 1, 2] -> [1, 3, 2] ->  [1, 2, 3] -> [1, 2, 3] -> [1, 2, 3]
//         3 <- 1       3 <- 2       1 - 2          2 - 3 
// [2, 3, 1] -> [2, 3, 1] ->  [2, 1, 3] -> [1, 2, 3] -> [1, 2, 3]
//         2 - 3       3 <- 1        2 <- 1          2 - 3
// [3, 2, 1] -> [2, 3, 1] ->  [2, 1, 3] -> [1, 2, 3] -> [1, 2, 3]
//         3 <- 2      3 <- 1       2 <- 1       2 - 3 

// n * (n-1) cases
// (n-1) * (n-1) swap checks
// in extreme case
// (n-1) + (n-2) + ... + 1 = (((n-1) + 1) * (n-1)) / 2 swaps 

// swap last index's to first index's , it consumes/costs arr.length -1 time(s) swap
// i sum: arr.length - 1
// arr.length numbers, one swap take two numbers, each number to be swapped, arr.length - 1
// j sum: arr.length - 1

class BubbleSort {
    constructor() {
        this.arr = [99, 1, 56, 342, 12, 54, 32]
        this.swapped = false
        this.sort = this.sort.bind(this)
    }
    sort(originalArray) {
        let swapped = this.swapped
        originalArray = this.arr
        const arr = [...originalArray];

        for (let i = 1; i < arr.length; i += 1) {
            swapped = false;
            for (let j = 0; j < arr.length - 1; j += 1) {
                console.info("i",i, "j",j, "arr[j]",arr[j], "arr[j+1]",arr[j + 1])
                if (arr[j + 1] < arr[j]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                    swapped = true
                }
            }
            if (!swapped) {
                return arr
            }
        }
        return arr
    }
}


export default BubbleSort

