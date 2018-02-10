# Regex Palindone
1. make all lowerCase()
2. turn to array and use regular expression to filter out stuff non-alphanumeric characters or use .replace() to replace results of regex with empty string. Use http://www.regular-expressions.info/charclass.html character sets to tell regex to match on of all the characters represented by \W. (^A-Za-z0–9)See: <https://www.debuggex.com/cheatsheet/regex/javascript>. So you get `/[\W]/g`. This doesnt cover `_`/ underscore. its not a non-alphanumeric character? We need to add it to the regex search. So `/[\W_]/g` says look for any one instance of \W or underscore (then replace it with empty string)
3. assign reverse().join() (previous section ex)to new var.
4. compare equality. Palindrone exist if spelling is same both ways so they should be equal

```js
function palindrome(str) {
  // Good luck!
  var regEx = /[\W_]/g;  
  var lcStr = str.toLowerCase().replace(regEx, '');
  var revLcStr = lcStr.split('').reverse().join('');
  
  return revLcStr === lcStr;
}

palindrome("eye");
```