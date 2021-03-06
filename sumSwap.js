
    /// 11 +4
// 15 -4
// swappped 
// 13
// 13
const sumSwap = (arr1, arr2) => {
    // get the total sum of all elements in both arr1 and arr2
    const arr1Sum = arr1.reduce((sum, index) => {
        sum = sum + index
        return sum
    })
    const arr2Sum = arr2.reduce((sum, index) => {
        sum = sum + index
        return sum
    })
    // calculate the difference between the two arr sums
    const difference = arr1Sum > arr2Sum ? arr1Sum - arr2Sum : arr2Sum - arr1Sum
    
    const map = new Map()
    arr1.forEach((element, index) => {
        map.set(element, index)
    });
    
    for(let i = 0; i < arr2.length; i++) {
        let target = difference - arr2[i]
        if(map.has(target)) {
            return [arr1[map.get(target)], arr2[i]]
        }
    }
  }
console.log(sumSwap([4,1,2,1,1,2], [3,6,3,3]))
