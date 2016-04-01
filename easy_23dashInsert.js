/* Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. 
For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. */

function DashInsert(str) { 
  
  str = str.toString(); //convert numbers to String 
  var dashStr="";
   
  
  for (var i = 0; i< str.length; i++){
    if ((i > 0) && (str[i] % 2 !== 0) && (str[i-1] % 2 !== 0)){ //Check after index 0 that every string and the one preceding it is odd
      dashStr+="-"; 
    }
    dashStr += str[i]; //regardless of whether string is odd, add it to dashStr
  } 
  
  return dashStr; 
         
}

console.log(DashInsert(56730)); 