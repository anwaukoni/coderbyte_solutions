/*
Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will 
always be a positive integer and return its additive persistence which is the number of times you must add the digits in 
num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 
and 1 + 8 = 9 and you stop at 9. 
*/

function AdditivePersistence(num) { 
   
   var num = num.toString().split('').map(Number); 
   var loop = 0; 
   var addAll; 
   
   while (num.length > 1){
    
    addAll = 0;
     
    addAll = num.reduce(function(a,b){return a + b}); 
     
     
    num = addAll.toString().split('').map(Number);
    
    loop++; 
   }

  return loop; 
         
 }

console.log(AdditivePersistence(2718));