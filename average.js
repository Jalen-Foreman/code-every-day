// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
	var sum = 0;
	const length = array.length;
	for (i = 0; i < length; i++) {
		sum += array[i];
	}
	return sum / length;
}


console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);