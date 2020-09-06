
// [2, 1]
// 1
// [3, 2, 1]
// 3 <- 2, 3 <- 1, 2 <- 1, 2 - 3

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
        const array = [...originalArray];

        for (let i = 1; i < array.length; i += 1) {
            swapped = false;
            for (let j = 0; j < array.length - 1; j += 1) {
                console.info(i, j, array[j], array[j + 1])
                if (array[j + 1] < array[j]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]]
                    swapped = true
                }
            }
            if (!swapped) {
                return array
            }
        }
        return array
    }
}


export default BubbleSort

