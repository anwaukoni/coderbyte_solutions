/*
Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and 
return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr 
contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 
numbers. It can get tricky if there's just two numbers!
*/ 

function SecondGreatLow(arr) { 

  // code goes here
  var numSort= arr.sort(function(a,b){
    return a - b; 
  });

  var choiceNum= []; 
  var output = []; 

  for (var i= 0; i < numSort.length; i++){
      if (i===0 || numSort[i]!== numSort[i-1]){
         output.push(numSort[i]);  
        }  
  } 
  choiceNum.unshift(output[1]);
  choiceNum.push(output[output.length-2]);  
  return choiceNum.join(' '); 

  //return arr; 
         
}

console.log(SecondGreatLow([-12, 12])); 