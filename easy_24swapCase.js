/*
Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. 
For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 
*/

function SwapCase(str) {
  var newString = '';  
  for (var i = 0 ; i < str.length; i++){
    if (str[i] !== str[i].toLowerCase() && str[i] === str[i].toUpperCase()){
          newString += str[i].toLowerCase(); 
    }else{ 
          newString += str[i].toUpperCase(); 
    }
  } 
    
  return newString; 
         
}

console.log(SwapCase("Sup DUDE!!?")); 