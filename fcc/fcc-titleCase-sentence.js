/*jshint esversion: 6 */
// function titleCase(str) {
// //  split string so we can run upper case on each
//   let array = str.split(' ');
//   console.log(array)
//   let upperCaseArray = array.map(function(i) {
    
//    i.charAt(0).toUpperCase();
//   });
//   return upperCaseArray.join(' ');
// }

// titleCase("I'm a little tea pot");

// working answer
// didnt read carefully that had to lowercase first

/*jshint esversion: 6 */
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  str = str.map(function(i){
      // charAt is using slice under the hood so have to put it back together with second index
    //   of sliced word.
    return i.charAt(0).toUpperCase() + i.slice(1);
  });
//   let upperCaseArray = array.map(function(i) {
    
//    i.charAt(0).toUpperCase();
//   });
  return str.join(' ');
}

titleCase("I'm a little tea pot"); // works
