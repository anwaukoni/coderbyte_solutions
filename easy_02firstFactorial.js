/*
Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and 
return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be 
between 1 and 18. 
*/

 function FirstFactorial(num) { 

  var numbersUnder=[]; 
  
  for (var i=1; i<=num; i++)
    if (i<=num){
    	numbersUnder.push(i); 
    }
  var Factorial= numbersUnder.reduce(function(a,b){
   return a*b;  
  }); 
   
  return Factorial;        
}