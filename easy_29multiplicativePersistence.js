/*
Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being passed which will 
always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits 
in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27
then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
*/

function MultiplicativePersistence(num) { 

  num = num.toString().split('').map(Number); 
  var loop = 0; 

  while(num.length > 1){
    var multiPers = 0; 

    multiPers = num.reduce(function(a,b){
      return a * b; 
    });

    num = multiPers.toString().split('').map(Number); 

    loop++; 
  }
  
  return loop; 
         
}

console.log(MultiplicativePersistence(4)); 
console.log(MultiplicativePersistence(25)); 