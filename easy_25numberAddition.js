/*
Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, 
add them together, then return that final number. For example: if str is "88Hello 3World!" the output 
should be 91. You will have to differentiate between single digit numbers and multiple digit numbers 
like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string 
will contain at least one letter or symbol. 
*/

function NumberAddition(str) { 
  
  var myRegEx= str.match(/[0-9]+/gi); 
  
  var numberAdd= myRegEx.reduce(function(a,b){
    return parseInt(a) + parseInt(b);
  }); 
 
  return numberAdd; 
         
}