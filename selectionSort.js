// function selectionSort(arr) {
//     let minimum = arr[0]
//     let prevMinimum = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         for(let j = i; j < arr.length; j++){
//             if(minimum > arr[j]) {
//                 minimum = arr[j]
//             }
//         }
//         if(minimum !== prevMinimum) {
//             let currMinIndex = arr.indexOf(minimum)
//             let prevMinIndex = arr.indexOf(prevMinimum)
//             [arr[currMinIndex], arr[prevMinIndex]] = [arr[prevMinIndex], arr[currMinIndex]]
//         }
//     }
// }

function test(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = -(arr.length - 1); j < 0; j++){
            if(minimum > arr[j]) {
                minimum = arr[j]
            }
        }
}