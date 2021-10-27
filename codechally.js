// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
/*
convert string to an array
loop through array
if the character contains an exclamation point
remove it by using the splice method
join array into a string
return the new string
*/

// Solve simpler solutions
// str = ['i','','love','','you']
// str = 'I love you'
// // str.splice(1,1)
// newStr = str.split('')
// console.log(newStr);

const removeExclamationMarks = (s) => {
    let str = s.split('')
    for(let i = 0; i < str.length; i++) {
        if(str[i].includes('!')) {
            str.splice(i, 1)
        }
    }
    let newStr = str.join('')
    return newStr
}


console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('I dont want you here! Get out!'));