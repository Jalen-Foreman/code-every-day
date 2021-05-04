// const obj = {"key1": 1};

const romanNumerals = {
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "L" : 50,
    "C" : 100,
    "D" : 500,
    "M" : 1000
}
let s = 'MCMXCIV';
let firstIndex = s.charAt(0)
s = s.split('')
// ['I', 'I']

let curr;
let prev;
let num = romanNumerals[firstIndex]

for(let i = 1; i < s.length; i++) {
    curr = romanNumerals[s[i]];
    prev = romanNumerals[s[i - 1]];
    if (curr <= prev) {
        num = num + curr;
    } else {
        num = num - prev*2 + curr
    }
}

console.log(num);
