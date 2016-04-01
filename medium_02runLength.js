/*
Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return
a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the 
occurrence of each repeating character and outputting that number along with a single character of the repeating 
sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, 
or symbols. 
*/

function RunLength(str) { 
  var strarr = str.split("");
  var resarr = [];  
  var len = strarr.length;
  count = 1;
  
  for (var i = 0; i <strarr.length; i++) {
    
    if (strarr[i] == strarr[i+1]) {
        count ++;
    }
        else {
        var entry = count + strarr[i];
        resarr.push(entry);
        count = 1;
        }
  }
  

  return resarr.join(""); 
         
}


console.log(RunLength("aabbcde"));
console.log(RunLength("wwwbbbw")); 