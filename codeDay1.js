// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {
    const strArr = s.split('');
    const index = s.search('!');
    strArr.splice(index, 1);
    result = strArr.join('');
    return result;
}


console.log(removeExclamationMarks('Hello World!'));
console.log(removeExclamationMarks('I dont want you here! Get out.'));