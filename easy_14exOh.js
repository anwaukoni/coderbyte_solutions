// Have the function ExOh(str) take the str parameter being passed and return the string 
// true if there is an equal number of x's and o's, otherwise return the string false. Only 
// these two letters will be entered in the string, no punctuation or numbers. For example: 
// if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

function ExOh(str) {
  
  var capExoh=str.toLowerCase();
  var countXs=0;
  var countOs=0;
  
  for (var i=0; i<capExoh.length; i++)
    if ("x".indexOf(capExoh[i])==-1){
    	countXs++; 
    }else if("o".indexOf(capExoh[i])==-1){
    	countOs++; 
    }
  
  if (countXs==countOs){
  	return true;   
  }

    
  return false; 
         
}