// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable 
// sequence by either returning the string true or false. The str parameter will be composed of + and = symbols 
// with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded 
// by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one 
// letter. 

function SimpleSymbols(str) { 
  var strPad= "=" + str + "=";
  
  var stringToMatch=/[a-zA-Z]/g;
 
  for (var i=0; i<strPad.length; i++){
   if(stringToMatch.test(strPad[i])){
      
     //if (strPad[i+1]=="+" && strPad[i-1]=="+")
		if (strPad[i+1]!=="+" || strPad[i-1]!=="+")
 
          return false;
      
    }
  }
  	return true; 
   
}