/*
Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each 
character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. 
For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 
*/

function SwapII(str) {
  
  var newString = ''; 

  for (var i = 0 ; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
          newString += str[i].toLowerCase(); 

    }else if(str[i] == str[i].toLowerCase()){ 
          newString += str[i].toUpperCase(); 
    }else {
          newString += str[i]; 
    }
  }
   var numRegEx = newString.match(/[0-9][a-zA-Z]+[0-9]/g);
    if (numRegEx !== null){
      for(var j=0; j < numRegEx.length; j++ ) {
        newString = newString.replace(numRegEx[j], numRegEx[j][numRegEx[j].length-1] + numRegEx[j].substr(1,numRegEx[j].length-2) + numRegEx[j][0]);
      }
    }

    
 
  return newString; 
         
}

console.log(SwapII("Hello -5LOL6")); 
console.log(SwapII("2S 6 du5d4e"));