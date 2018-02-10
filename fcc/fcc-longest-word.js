// # FCC Longest Word Length
/*jshint esversion: 6 */
// TODO: print out the winning word
// - Note: string.split() produces an array.

function findLongestWord(str) {
  let array = str.split(" ");
  console.log(array);
// declare variable for the lenght of our longest word
  let lw = 0;
  let word ='';
  // let word = array[i];
  for (i =0; i < array.length; i++) {
    let tested = array[i].length;
    let testedword = array[i];
    if (tested > lw) {
      lw = tested;
      word = testedword;
    }
  }
  // return lw;
  console.log(lw, word);
}

findLongestWord("The quick brown fox jumped over the lazy dog");