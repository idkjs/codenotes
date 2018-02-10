// function rot13(str) { // LBH QVQ VG!

//     var shift = 13;
//     var map = Array.prototype.map;
//     var a = map.call(str, function(x) {
//         // x.charCodeAt(0) + shift;
//         // return a
//         return x.charCodeAt(0) - shift;
//     });
//     const decoded = String.fromCharCode(a[0])

//     console.log(
//         "Hi",
//         // str.split(),
//         a,
//         // c,
//         // typeof str,
//         decoded
//         // arguments,
//         // str[0].charCodeAt() + shift

//     )
// }

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

const rot14 = str => [str]
    .map(s => s.trim())
    .map(i => String.charCodeAt(i))
    // .map(s => parseInt(s))
    .map(i => i + 13)
    .map(i => String.fromCharCode(i))

// const result = rot14()

function rot13(str) { // LBH QVQ VG!
    str = str.split('');
    const shift = 13
    str = str.map(function(i) {
        // charAt is using slice under the hood so have to put it back together with second index
        //   of sliced word.
        return String.fromCharCode(i.charCodeAt(0) - shift);
    }).join('');
    return str;
}



// Change the inputs below to test
console.log(
    rot13(input), rot14(input)
)

/*jshint esversion: 6 */
// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   str = str.map(function(i){
//       // charAt is using slice under the hood so have to put it back together with second index
//     //   of sliced word.
//     return i.charAt(0).toUpperCase() + i.slice(1);
//   });
// //   let upperCaseArray = array.map(function(i) {

// //    i.charAt(0).toUpperCase();
// //   });
//   return str.join(' ');
// }