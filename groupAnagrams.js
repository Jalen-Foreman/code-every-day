// var groupAnagrams = function(strs) {
//     let results = []
//    // sort each element in array;
//     strs.forEach((element)=>{
//       let key = element.split('').sort()
//     })

//    // find each element that equals each other and push them into a subarray
//    // combine the subarrays into empty result array
//    // if element is not equal to no other array, push it into a single subarray
// };

// var groupAnagrams = function (strs) {
//     var newArr = [];
// 	strs.forEach((elem) => {
//         key = elem.split('').sort();
// 		newArr[key] instanceof Array
//         ? newArr[key].push(elem)
//         : (newArr[key] = [elem]);
// 	});
// 	return Object.keys(newArr).map(function (k) {
//         return newArr[k];
// 	});
// };

// var groupAnagrams = function (strs) {
//     let length = strs.length;
// 	let hash = {};
// 	let result = [];
// 	for (let i = 0; i < length; i++) {
//         let str = strs[i];
// 		let sorted = str
//         .split('')
//         .sort((a, b) => (a > b ? -1 : 1))
//         .join('');
        
// 		if (hash[sorted]) {
//             hash[sorted].push(str);
// 		} else {
//             hash[sorted] = [str];
// 		}
// 	}
// 	for (let i in hash) {
//         result.push(hash[i]);
// 	}
// 	return result;
// };

var groupAnagrams = function (strs) {
    let map = new Map();
	for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
		let sortedchars = str.split('').sort().join();
		if (map.has(sortedchars)) {
            let current = map.get(sortedchars);
			current.push(strs[i]);
			map.set(sortedchars, current);
		} else {
            map.set(sortedchars, [strs[i]]);
		}
	}
	return map;
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// {
// [a,e,t]: 'eat, tea', 'ate'
// }