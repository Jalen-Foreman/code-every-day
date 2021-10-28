// function bubbleSort(arr) {
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//              console.log(arr, arr[j], arr[j+1]);
//             if (arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([37,45,25,8]));

// Optimized solution with noSwaps

function bubbleSort(arr) {
    let noSwaps;
    // Go backwards in this first loop so j loops through the array while leaving the last element alone every loop since it would already be sorted
	for (let i = arr.length; i > 0; i--) {
    // make noSwaps true in the beginning so if their are no swaps made in the nested loop, the loops are broken and the array would be sorted
        noSwaps = true
    // compare each element side by side every loop
		for (let j = 0; j < i - 1; j++) {
			console.log(arr, arr[j], arr[j + 1]);
    // if the left elem is greater than the right elem, swap then and set swap to false
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false
			}
        }
    // if noSwaps equal true break the loops
        if(noSwaps) break
	}
    // return the array
	return arr;
}
console.log(bubbleSort([8,1,2,3,4,5,6,7]));
