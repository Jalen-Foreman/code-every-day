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
      return false
  }
  const str1Obj = {}
  const str2Obj = {}
  let word1 = str1.toLowerCase()
  let word2 = str2.toLowerCase()
  for(let char of word1) {
    str1Obj[char] = (str1Obj[char] || 0) + 1
  }
  for(let char of word2) {
      str2Obj[char] = (str2Obj[char] || 0) + 1
  }

  for(let key in str1Obj) {
      if(str1Obj[key] !== str2Obj[key]) {
          return false
      }
      if(!(key in str2Obj)){
          return false
      }
  }
  return true
}
console.log(validAnagram('Iceman', 'Cinema')) // true
console.log(validAnagram('Bakers', 'Cinema')); // false
console.log(validAnagram('tar', 'Rat')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
