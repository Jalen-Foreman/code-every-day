// const checkIfExist = function (arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		curr = arr[i];
// 		value = arr.find(() => {
// 			// find in this array if theres a number that equals the double of the current index value                or the half of the currrent index value
// 			N = curr * 2;
// 			M = curr / 2;
// 			return M && N;
// 		});
//         if (value != undefined) {
//             return true;
//         } else {
//             return false;
//         }
// 	}
	
// };
// arr = [10, 2, 5, 3];
// arr.forEach((element) => {
// 		N = element * 2;
// 		M = element / 2;
// 	}).find(() => {
// 		if (M && N) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	});

var checkIfExist = function (arr) {
	const set = new Set();

	for (let i = 0; i < arr.length; i++) {
		const currValue = arr[i];

		if (set.has(currValue)) {
			return true;
		}
		set.add(currValue / 2);
		set.add(currValue * 2);
	}
	return false;
};
console.log(checkIfExist([10, 2, 5, 3]));