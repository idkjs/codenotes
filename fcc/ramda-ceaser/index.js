const R = require('ramda')

//WORKS!
// function rot13(str) { // LBH QVQ VG!
//     str = str.split('')
//     const shift = 13
//     str = str.map(function(i){
//         c = i.charCodeAt(0)
//         if(c < 65 || c > 90) {
//             return String.fromCharCode(c)
//         } else if (c < 78) {
//             return String.fromCharCode(c + shift)
//         }
//         return String.fromCharCode(c - shift)
//   }).join('')
//   return str;
// }

// identity()/ string in a box version
const input = "SERR PBQR PNZC"

// const log = R.tap(console.log)
// const rot14 = str => [str] // [ 'SERR PBQR PNZC' ]
// const rot14 = str => [str] // [ 'S', 'E', 'R', 'R', ' ', 'P', 'B', 'Q', 'R', ' ', 'P', 'N', 'Z', 'C' ]
//     [str].split('')
// rot14.map(s => console.log(s))
// console.log(rot14[0]) // undefined
// .every(function(item, index, arr) {
//     console.log(this); //window
// }, input);
// function splitString(stringToSplit, separator) {
//     var arrayOfStrings = stringToSplit.split(separator);

//     console.log('The original string is: "' + stringToSplit + '"');
//     console.log('The separator is: "' + separator + '"');
//     console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }
// splitString(input, '')
// const result14 = rot14(input)
// console.log(rot14[0])
// console.log(result14)
//
// function rot13(str) { // LBH QVQ VG!
//     str = str.split('');
//     const shift = 13
//     str = str.map(function(i) {
//         // charAt is using slice under the hood so have to put it back together with second index
//         //   of sliced word.
//         return String.fromCharCode(i.charCodeAt(0) - shift);
//     }).join('');
//     return str;
// }

// Change the inputs below to test
// console.log(
//         rot13(input), rot14(input), input
//     )

// Egghead Frisby <https://egghead.io/lessons/javascript-linear-data-flow-with-container-style-types-box>
// const nextStringNumberFromChar = str => {
//         const trimmed = str.trim()
//         const number = parseInt(trimmed)
//         const nextNumber = number + 1
//         return String.fromCharCode(nextNumber)
//     }
// orginal
// const nextCharForNumberString = str => {
//     const trimmed = str.trim()
//     const number = parseInt(trimmed)
//     const nextNumber = number + 1
//     return String.fromCharCode(nextNumber)
// }

// first refactor

// const nextCharForNumberString = str =>
//     String.fromCharCode(parseInt(str.trim()) + 1)

// second refactor with maps. 'String in a Box'

// const nextCharForNumberString = str => [str]
//     .map(s => s.trim())
//     .map(s => parseInt(s))
//     .map(i => i + 1)
//     .map(i => String.fromCharCode(i))

// 3rd refactor


const Box = x =>
    ({
        map: f => Box(f(x)),
        inspect: () => `Box(${x})`
    })

const nextCharForNumberString = str =>
    Box(str)
    // .map(s => s.trim())
    .map(s => parseInt(s))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))

const result = nextCharForNumberString(' 64')
console.log(result)

const rot13 = str =>
[str]
.split('')
// WORKS!
// function rot13(str) { // LBH QVQ VG!
//   str = str.split('')
//   // str.map(c => String.charCodeAt(c))
//   str.map(i => console.log(i))
  // const shift = 13
  // str = str.map(function(i){
  //   c = i.charCodeAt(0)
  //   if(c < 65 || c > 90) {
  //     return nextCharForNumberString(c)
  //   } else if (c < 78) {
  //     return nextCharForNumberString(c + shift)
  //   }
  //   return nextCharForNumberString(c - shift)
  // }).join('')
  // return str;
// }
rotResult =rot13(input)
console.log(
  rotResult

);