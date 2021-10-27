function binarySearch(arr, val) {
    // create a start and end pointer
	let start = 0
	let end = arr.length - 1
    // set the middle pointer before loop to make sure the first middle pointer is or isn't equal to the value
	let mid = Math.floor((start + end) / 2)
    // while start is less than or equal too end and middle pointer is not equal to value
	while (start <= end && arr[mid] !== val) {
        // if value is less than middle pointer, move the end pointer in front of curr middle pointer
        if(val < arr[mid]) {
            end = mid - 1
        // else if value is greater than middle pointer then move the start pointer in front of curr middle pointer
        } else {
            start = mid + 1
        }
        // reset the middle pointer between the now start and end pointer
        mid =  Math.floor((start + end) / 2)
	}
    // if when you exit the loop, the middle pointer is equal to value, return index of value, else return -1
    if(arr[mid] === val) return mid
    else return -1
}
console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 3))
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
