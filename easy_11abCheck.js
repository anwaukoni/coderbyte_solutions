// Have the function ABCheck(str) take the str parameter being passed and return the string true if the 
// characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" 
// would result in true because there is exactly three characters between a and b). Otherwise return the 
// string false. 

function ABCheck(str) { 
 var allLow=str.toLowerCase();
 var newString=allLow.replace(/ /,"z")
 
  for (var i=0; i<newString.length; i++)
    if("b".indexOf(newString[i])!==-1){
      	if (newString[i-4]=="a"||newString[i+4]=="a"){
         return true;
        }
    }
  return false;     
}