/*
Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will 
contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another 
range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true 
if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return 
the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. 
The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges 
do not overlap by at least x numbers, then your program should return the string false. 
*/

function OverlappingRanges(arr) { 
  var countFirst= arr[0];
  var countOneSpace = [];
  var countSecond = arr[2];
  var countTwoSpace = [];
  var lastCount = arr[4];
  var results = 0; 

  for (var i=countFirst; i<=arr[1]; i++){
     countOneSpace.push(countFirst);
     countFirst++; 
  }

  for (var k=countSecond; k<=arr[3]; k++){
    countTwoSpace.push(countSecond); 
    countSecond++; 
  }
    
  for (var j= 0; j<countTwoSpace.length; j++){
    for (var p= 0; p<countOneSpace.length; p++){
      if (countTwoSpace[j]==countOneSpace[p]){
        results++; 
      }
    }
  }

//You can use filter and includes method alternatively
// results= countTwoSpace.filter(function(arrItem){
//       return countOneSpace.includes(arrItem); 
//   })

console.log(results); 
console.log(countTwoSpace);
console.log(countOneSpace); 

if (results === lastCount){
  return true; 
}

  return false

  
         
}
//Beware: Test is not accurate on coderbyte!
console.log(OverlappingRanges([1,2,1,3,1])); 