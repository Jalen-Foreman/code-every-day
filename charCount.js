// get the character count of a string
// charCount('hello') return {h:1, e:1, l:2, o:1}
/*
charCount("I have a PIN number of 1234")
return {
    i: 1,
    h: 1,
    1: 1,
    2: 1,
    3: 1,
    ...
}
charCount({!}) return null
*/

// const charCount = (str) => {
//     /*  .get the string
//         .loop over the string
//         .if the character matches the key both upper and lowercase, increment && if same numeric character is 
//          present, increment in object
//         .set each character as a key value pair in object
//         .else return null
//         .return an object with the character count all lowercase and alpha numeric numbers included
//     */ 
//    // My first solution
//    const charObj = {};
//    for(let i = 0; i < str.length; i++) {
//        if (/[a-z0-9]/.test(str[i])) {
//             let char = str[i].toLowerCase()
//             if(charObj.hasOwnProperty(char)){
//                 charObj[char]++
//             } else {
//               charObj[char] = 1
//             }
//        } 
//    }
//    return charObj
// }
// console.log(charCount("i have a fallen 3 times 3 3. Big bank take lil bank!!!"))

// Solving Simpler Problems

// let string = "2"
// let lowerCase = string.toLowerCase()
// console.log(lowerCase);

// let string2 = "I have gotten a job 2 times!"
// // I need to put every character in the object not including punctuation and spaces.
// console.log((/[a-zA-Z]/).test(string2.charAt(22)))
// console.log( /\d/.test(string2.charAt(20)));

// const map = new Map()
// map.set("Jalen", 0)
// map["Jalen"] + 1
// console.log(map.get("Jalen"))

// const obj = {}
// obj["Jalen"] = 1
// obj["Jalen"]++
// console.log(obj);

// const obj = new Object()
// obj.jalen = 1
// obj.jalen++
// console.log(obj.hasOwnProperty('jalen'))
// console.log(obj);

// const str = "I like booty"
// console.log(str[0]);

// My modified solution

const charCount = (str) => {
	const charObj = {};
	for(let char of str) {
		if (/[a-z0-9]/.test(char)) {
			char = char.toLowerCase();
            // if its truthy return left arg else if falsey, return right side
			charObj[char] = ++charObj[char] || 1;
		}
	}
	return charObj;
};
console.log(charCount('I need about 4, 5 , 6 cheeseburgers or imma get Dboy on yo ass.'));
 
