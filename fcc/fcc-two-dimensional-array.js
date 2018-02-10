// create a new array that is what you will return.
// create new arrays with slice and push it to the new array
// iterate so you arent getting the same array slice. use the size param for iteration and arr.length for the max iteration.
function chunkArrayInGroups(arr, size) {
  // Break it up. new array with sub arrays
  var arrNew = [];
//   initial i at 0 or its undefined
  var i = 0;
  while(i < arr.length){
    arrNew.push(arr.slice(i, i + size));
//     arr.slice(i, i + size).push(arrNew);
// increase i
    i += size;
  }
//   return arrNew;
    console.log(arrNew);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
