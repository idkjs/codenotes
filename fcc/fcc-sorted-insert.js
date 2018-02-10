/*
1. we want to passed in array, sort it and get the index of where the second arg should be 
inserted.

2. Get indexOf number in array that precedes num
*/

// Answer

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
arr.sort(function(a,b){
    return a - b;
});
console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i ; 
//  -1 for zero index. get index of last item, check if less than num
//       if it is, we need to put num at end of array so we need the index of that position
    } else if (arr[arr.length - 1] < num) {
      return arr.length;  
    }
  }
}

getIndexToIns([40, 60], 50);

// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
// arr.sort(function(a,b){
//     return a - b
// });
// console.log(arr)
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       return i ;  
// //     } else (arr[i] >= num) {
// //       return i;  
//     }
//   }
// }
// console.log(
// getIndexToIns([5, 3, 20, 3], 5) 
// )
// getIndexToIns([40, 60], 50);
// function getIndexToIns(arr, num) {
//   // Find my place in this sorted array.
//   arr.sort()

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       console.log(i)
//     //    
//     }
//   }
// //   console.log(arr)

// }
// console.log(
//     getIndexToIns([40, 60], 50)
// )
