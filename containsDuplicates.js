// if there are duplicates integers in array return true else return false
// containsDuplicates([1,2,3,4]) return false
// containsDuplicates([2,2,3,3,]) return true
// containsDuplicates(dfkd) invalid input
// containsDuplicates('') invalid input

// Solving simpler problems
// const arr = []
// console.log(Array.isArray(arr))

const containsDuplicates = (arr) => {
    // if param is of type arr continue else return invalid input
    // loop through arr and place each index into a hash table
    // if the hash table contains the current index return true else return false
    if(Array.isArray(arr)) {
        let map = new Map()
        for(let int of arr) {
            if(map.has(int)) {
                return true
           } else {
               map.set(int)
           }
        }
        return false
    } else {
        return 'invalid input'
    }
}

// console.log(containsDuplicates([1,2,3,4,5])); // return False
// console.log(containsDuplicates([1,2,3,4,4])); // return True
// console.log(containsDuplicates('')); // return invalid input
// console.log(containsDuplicates({1: 2, 3: 4})); // return invalid input
