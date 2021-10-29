// accept three arguments: array, start index, end index. These can default to 0 and arr.length - 1 respectively.
function pivot(arr, start = 0, end = arr.length - 1) {
// Grab the pivot from start of the array
let swapIndex = start
// Store the current pivot index in a variable which keeps track of where the pivot should end up
    let pivot = arr[start]
// loop through the array from the start until the end 
    for(let i = start + 1; i < arr.length; i++){
// if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        if(pivot > arr[i]){
            swapIndex++
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]

        }
    }
// Swap the starting element (the pivot) with the pivot index
[arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
// Return the pivot index
    return swapIndex
}

// accept three arguments: arr, left, right. (which can default to 0 and lastIndex)
function quickSort(arr, left = 0, right = arr.length - 1){
// Make a base case which returns the arr if the left pointer is greater than the right pointer
    if(left < right){
// Get the initial pivotIndex 
        let pivotIndex = pivot(arr,left,right)
// Recursively call quickSort on the left and right side of the arr while continually increasing or decreasing the left and right pointers
        quickSort(arr,left,pivotIndex-1)
        quickSort(arr,pivotIndex+1,right)
    }
// return the arr which will allow the call stack to catch up
    return arr
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));