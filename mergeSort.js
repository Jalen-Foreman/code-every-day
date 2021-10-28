// this function takes two sorted arrays
function merge(arr1,arr2){
    // make an empty array that gets the sorted elements pushed inside of it
    let results = []
    let i = 0
    let j = 0
    // loop while i and j pointers are less than both arrays 
    while(i < arr1.length && j < arr2.length){
    // if j > i then push i into results array and increment i
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++
    // else if j <= i then push j into results array and increment j
        } else {
            results.push(arr2[j])
            j++
        }
    }
    // if there are still elements in either arr1 or arr2, continue to loop through the arrays and push the remaining elements into the sorted results array
    while(i < arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j])
        j++
    }
    return results
}
console.log(merge([1,10,50], [2,14,99,100]));

function mergeSort(arr){
    // this returns the last arr in the divided arrays at the end of the call stack
    if(arr.length <= 1) return arr
    // get the middle of the original array so it can be divided into two seperate arrays
    let mid = Math.floor(arr.length/2)
    // recursively call merge sort on the left side of the array until it returns a single arr
    let left = mergeSort(arr.slice(0,mid))
    // recursively call merge sort on the right side of the array until it returns a single arr
    let right = mergeSort(arr.slice(mid))
    // 
    return merge(left, right)
}