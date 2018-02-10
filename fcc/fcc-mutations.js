// <https://www.freecodecamp.com/challenges/mutations#?solution=%0Afunction%20mutation(arr)%20%7B%0A%20%20return%20arr%3B%0A%7D%0A%0Amutation(%5B%22hello%22%2C%20%22hey%22%5D)%3B%0A>
// sort array so shorter word comes first. no point in checking letters after there are no
// more.

/*
Use arr.every() to check if there is an indexOf() one param in first array, in second array
see: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every>
 */
function mutation(arr) {
    arr.sort(function(a,b){
        return a.length - b.length;
    })
    // get index[0] for arr, change it to lowerCase since we dont care if its lowercase
    // or uppercase. use .split('') to get an array of the each letter at that index to run
    // every against. so we call .every() and pass in the item we are checking against.
    console.log(arr[0], arr[1], arr[1].toLowerCase().indexOf('h'))
    return arr[0].toLowerCase().split('').every(function(x){
       if(arr[1].toLowerCase().indexOf(x) === -1){
        return false;
    } else {
        return true;
    }
    });
}
console.log(
mutation(["floor", "for"])
);