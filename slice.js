// create a function that removes the first and last index in string

// Input & Output
// removeChar('eloquent') return loquen

function removeChar(str) {
	// remove the beginning and last index using slice
	return str.slice(1, -1);
}

console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('person'), 'erso');
console.log(removeChar('place'), 'lac');