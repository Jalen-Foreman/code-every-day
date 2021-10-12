// Example input, a list of cities
const cities = [
  { country: 'USA', name: 'Atlanta', pop: 4000000 },
  { country: 'China', name: 'Beijing', pop: 100000000 },
  { country: 'USA', name: 'Springfield', pop: 60300 },
  { country: 'Germany', name: 'Berlin', pop: 120000 }
];
// https://github.com/Jalen-Foreman/code-every-day/blob/master/sumZero.js
// https://github.com/Jalen-Foreman/code-every-day/blob/master/Anagrams.js
// https://github.com/Jalen-Foreman/code-every-day/blob/master/interview.js

// Calling your function and logging the results\
// Group the data by country
const results = (arr) => {
    // make an empty hash table
    const map = new Map()
    // loop through the array of objects
    for(let index of arr) {
        // place country in a hash table 
        if(map.has(index.country)) {
            let value = map.get(index.country)
            value.push(index)
            map.set(index.country, value)
        } else {
            // set the country as a key, value pair with value of array containing current index
            map.set(index.country, [index])
        }
       
    }
    return map
    // if hash table has country, push that arr index into value of country
}
console.log(results(cities));

// Expected Output
// {
//   'USA': [
//     { country: 'USA', name: 'Atlanta', pop: 4000000 },
//     { country: 'USA', name: 'Springfield', pop: 60300 }
//   ],
//   'China': [
//     { country: 'China', name: 'Beijing', pop: 100000000 }
//   ],
//   'Germany': [
//     { country: 'Germany', name: 'Berlin', pop: 120000 }
//   ]
// }