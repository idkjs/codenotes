// Return the remaining elements of an array after chopping off n elements from the head/beginning of index.
// remove n elements from index 0. splice() returns removed items. we want what is left.
// start at 0. end at howMany
function slasher(arr, howMany) {
  // it doesn't always pay to be first
 var i = 0;
//  run shift for the amount of times of howMany param
 while(i < howMany) {
  arr.shift(0);
//   iterite i after each turn
   i++;
  }
//   return arr;
  console.log(arr);
}

slasher([1, 2, 3], 2);