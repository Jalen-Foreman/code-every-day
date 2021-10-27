// const obj = {"key1": 1};
// create an object that gives the value of the roman numerals by 5
const romanNumerals = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}
// use split method on roman numeral and store the first index
let s = 'MCMXCIV';
let firstIndex = s.charAt(0)
s = s.split('')
// ['I', 'I']
// create a curr and prev variable for the string array and store the value of the first index in num variable
let curr;
let prev;
let num = romanNumerals[firstIndex]
// loop through the string array and get the values of both the curr and prev index
for(let i = 1; i < s.length; i++) {
    curr = romanNumerals[s[i]];
    prev = romanNumerals[s[i - 1]];
    // if the curr index is less than or equal to the previous index then continue to store the accumulated sum into num variable
    if (curr <= prev) {
        num = num + curr;
    // else implement equation that gets us to a correct sum
    } else {
        num = num - prev*2 + curr
    }
}

console.log(num);
