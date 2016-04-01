/*
Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in strArr, 
which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance 
is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] 
then your program should return 1. The string will always be of equal length and will only contain lowercase characters 
from the alphabet and numbers. 
*/

function HammingDistance(strArr) { 

  var count = 0; 
  var len = strArr[0].length; 
  var arrZero = strArr[0].split('');
  var arrOne = strArr[1].split(''); 
  
  for (var i=0; i<len; i++){
    if (arrZero[i] !== arrOne[i]){
      count++; 
    }  
  } 

  return count;  
         
}

// ----------MORE SUCCINCT ANSWER--------------------

function HammingDistance(strArr) {
  return strArr[0].split("").filter(function(c,i) { return c !== strArr[1][i]; }).length;
}

console.log(HammingDistance(["coder", "codec"])); 