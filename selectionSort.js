function selectionSort(arr) {
    // loop through array
    for(let i = 0; i < arr.length; i++){
    // Store the first element as the smallest value you've seen so far.
        let lowest = i
        for(let j = i + 1; j < arr.length; j++){
    // Compare this item to the next item in the array until you find a smaller number
        console.log(lowest, j);
            if(arr[lowest] > arr[j]) {
    // if smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array 
                lowest = j
            }
        }
    // if the minimum is not the initial index you began with, swap the indexes
        if(i !== lowest) {
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
        }
    }
    return arr
}

console.log(selectionSort([1,10,3,9,5]));