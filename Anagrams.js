/*
Given to strings, write a function that checks if the second string was derived from the same characters as the first. Example: Cinema & Iceman
Inputs & Outputs:
validAnagram('rat', 'tar') // true
validAnagram('dog', 'go') // false
validAnagram('CinEma', 'IcEmAn') // true
validAnagram(' ', ' ') // true...SHOULD RETURN null
*/ 

const validAnagram = (str1, str2) => {
    /*
        Get strings.
        If strings are not the same length, return false
        Make an object that checks the char count of each letter in the strings.
        Compare the two objects.
        If the first object doesn't contain the same letters and the same amount of letters as the second object return false, 
        else,
        Return boolean stating if the two strings are anagrams or not.
    */
   if(str1.length !== str2.length) {
       return false;
   }
    const charCount1 = {};
    const charCount2 = {};
    for(let str of str1) {
        str = str.toLowerCase()
        charCount1[str] = (charCount1[str] || 0) + 1;
    }
    for(let str of str2) {
        str = str.toLowerCase()
        charCount2[str] = (charCount2[str] || 0) + 1;
    }
    const keys = Object.keys(charCount1)
    for(let key of keys) {
        if(charCount1[key] !== charCount2[key]) {
            return false
        } 
    }
    return true
}
console.log(validAnagram('Iceman', 'Cinema')) // true
console.log(validAnagram('Bakers', 'Cinema')); // false
console.log(validAnagram('tar', 'Rat')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// Solve & Simplify
// const obj = {
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
   

// };

// const obj2 = {
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
// 	jalen: 2,
	
// };

// keyVal1 = Object.keys(obj);
// function check() {
//     for(let key of keyVal1) {
//       if(obj[key] !== obj2[key]) {
//           return false
//       } 
//     }
//     return true
// }
// console.log(check())

// Modified Solution

const validAnagram = (str1, str2) => {
	/*
        Get strings.
        If strings are not the same length, return false
        Make an object that checks the char count of each letter in the strings.
        Compare the two objects.
        If the first object doesn't contain the same letters and the same amount of letters as the second object return false, 
        else,
        Return boolean stating if the two strings are anagrams or not.
    */
	if (str1.length !== str2.length) {
		return false;
	}
	const charCount = {};
	
	for(let str of str1) {
		str = str.toLowerCase();
		charCount[str] = (charCount[str] || 0) + 1;
	}
	for(let str of str2) {
        let letter = charCount[str]
    }
};
