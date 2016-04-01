/*
Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, 
divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits 
long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 
10000 the output should be "12,346". 
*/

function DivisionStringified(num1,num2) {  
    
  var result = Math.round(num1/num2).toString(); 
  var answer = ''; 
  var reversed = Array.prototype.slice.call(result).reverse().join("");
    
    for (var i = result.length - 1; i >= 0  ; i--){
      answer += reversed[i];  
      if (i % 3 === 0 && i !== 0){
        answer += ","; 
      } 
  }
    return answer;          
}
console.log(DivisionStringified(123456789,10000));