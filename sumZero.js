/*Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist*/
// find a pair of integers in a sorted array that sum to zero
// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined
 
const sumZero = (arr) => {
    // make a left and right pointer
    let left = 0
    let right = arr.length - 1
    // make a while loop with condition that the left pointer has to be less that the right pointer
    while(left < right) {
        // if the sum of the left and right are already 0, return pair of numbers in array
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right]]
        }
        // if the sum is greater than 0, decrement the right pointer
        // if the sum is less than 0, increment the left pointer
        if (sum > 0) {
            right--
        } else {
            left++
        }

    }
    // when sum is equal to zero, return pair in array format, else return undefined
}
console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([-4,-3,-2,-1,0,1,2,5,10]));