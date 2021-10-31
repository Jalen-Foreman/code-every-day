// returns the ith digit (using base 10) within an integer
function getDigit(num, i){
return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
// returns the amount of digits an integer has
function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
// returns the maximum number of digits within an array
function mostDigits(nums){
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}
// returns a sorted array of integers
function radixSort(arr){
    // figure out how many digits the largest number has
    let maxDigits = mostDigits(arr)
    // loop from i = 0 up to maxDigits
    for(let i = 0; i < maxDigits; i++){
    // for each iteration create:
        // create buckets for each digit(0-9)
        let bucket = Array.from({length: 10}, () => [])
        // place each number in the corresponding bucket based on its kth digit
        for(let j = 0; j < arr.length; j++){
                let digitPlace = getDigit(arr[j],i)
                bucket[digitPlace].push(arr[j])
            }
        // replace are existing array with values in our buckets, starting with 0 and going up to 9
        arr = [].concat(...bucket);
    }
    // return array
    return arr
}
console.log(radixSort([1,11,14,3,167]))