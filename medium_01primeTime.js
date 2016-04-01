/*
Have the function PrimeTime(num) take the num parameter being passed and return the string true if the 
parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 
*/

function PrimeTime(num) { 
  
  var end= Math.pow(2,16); 
  if (num<1||num!=Math.round(num)){
    return false;
  }
  for (var i=2; i<num; i++){
    if (num%i==0){
    return false; 
    }
  } // code goes here  
  
  return true; 
         
}