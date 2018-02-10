// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   var trunlength = num - 4;
//   var dots = '...';
// //   var newstr = '';
//   if (str.length > num) {
//     const newstr = str.slice(0, trunlength) + dots;
//     return newstr;
//     // console.log(newstr);
//   }
//   console.log(newstr);
// }

truncateString("A-tisket a-tasket A green and yellow basket", 11);

// truncate if longer than given num
// return ... string indicating its been truncated
// if num <= 3, dont need to account for 3 dots
// this errors out when str is not a string. handle with else.
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var trunlength = num - 3;
  var dots = '...';
  if (str.length > num && num > 3) {
    return str.slice(0, trunlength) + dots;
//     return str;
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + dots;
  } else {
    
  
   return str;
}}

truncateString("A-tisket a-tasket A green and yellow basket", 11);