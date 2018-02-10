/*jshint esversion: 6 */
//https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays#?solution=%2F*jshint%20esversion%3A%206%20*%2F%0Afunction%20largestOfFour(arr)%20%7B%0A%20%20%2F%2F%20You%20can%20do%20this!%0A%20%20let%20newArr%20%3D%20%5B%5D%3B%0A%20%20arr.map(function(sub)%7B%0A%20%20%20%20let%20largest%20%3D%20sub.sort(function(a%2C%20b)%7Breturn%20a%20-%20b%3B%7D).pop()%3B%0A%20%20%20%20newArr.push(largest)%3B%0A%2F%2F%20%20%20%20%20console.log(largest)%3B%0A%20%20%7D)%3B%0A%20%20return%20newArr%3B%0A%7D%0A%0AlargestOfFour(%5B%5B4%2C%205%2C%201%2C%203%5D%2C%20%5B13%2C%2027%2C%2018%2C%2026%5D%2C%20%5B32%2C%2035%2C%2037%2C%2039%5D%2C%20%5B1000%2C%201001%2C%20857%2C%201%5D%5D)%3B%0Av
function largestOfFour(arr) {
  // You can do this!
  let newArr = [];
  arr.map(function(sub){
    let largest = sub.sort(function(a, b){return a - b;}).pop();
    newArr.push(largest);
    // console.log(largest);
  });
//   return newArr;
    console.log(newArr)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
