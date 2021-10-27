// Return the maximum profit from choosing a single day to buy one stock and choosing a different day in the future to sell that stock. If you cannot achieve any profit return zero. Buying on day 2 and selling on day 1 is not allowed.

// maxProfit([7,1,5,3,6,4]) return 5 

const maxProfit = (arr) => {
    // while right is less than arr.length 
    let right = 1
    let left = 0
    let maxProfit = 0
    while(right < arr.length) {
        // make a left and right pointer
        let leftPointer = arr[left]
        let rightPointer = arr[right]
        // if the left pointer is less than right pointer
        if (leftPointer < rightPointer) {
            // find the difference between the two values and set as max profit
            let difference = rightPointer - leftPointer
            // if the difference is greater than max profit, set curr. difference as new max profit
            maxProfit = Math.max(difference, maxProfit)
            // increment the right pointer
            right++
        } else {
            // if the left pointer is greater than the right pointer, then increment the left and right pointer 
            left = right
            right++
        }
    }
    // return max profit
    return maxProfit
}
console.log(maxProfit([7,1,5,3,6,4]));