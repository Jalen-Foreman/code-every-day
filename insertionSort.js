function insertionSort(arr) {
    // loop through array starting at second element
   for(let i = 1; i < arr.length; i++){
    // store curr element into variable
       let currVal = arr[i]
    // compare j = prev and i = curr while j >= 0 and arr[j] > currVal; decrement j
       for(let j = i - 1; j >= 0 && arr[j] > currVal; j--){
    // store the prev into curr while conditions are still true
           arr[j+1] = arr[j]
       }
    // j is now less than what it was in the loop    
    // store the currVal into prev elem
       arr[j+1] = currVal
    // Repeat
   }
   return arr
}    
console.log(insertionSort([2,1,9,66,4]))