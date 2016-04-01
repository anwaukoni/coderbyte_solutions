/*
Have the function LetterCountI(str) take the str parameter being passed and return the first word with the 
greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest 
because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with 
repeating letters return -1. Words will be separated by spaces. 
*/

function LetterCountI(str) {
  var arr = str.split(" ");
  var x = arr.length, a, b = 0, countArr, output = "";
  for (var i = 0; i < x; i++) {
    countArr = [];
    a = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (countArr.indexOf(arr[i].charAt(j)) !== -1) {
        a += 1;
      } else {
        countArr.push(arr[i].charAt(j));
      }
    }
    if (a > b) {
      b = a;
      output = arr[i];
    }
  }
  
  return output ? output : -1;

}