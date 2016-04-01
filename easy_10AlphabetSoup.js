// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the 
// letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be 
// included in the string. 

function AlphabetSoup(str) {
  
  var indexAlph=[];
  var newOrder=[];
  var strSmall= str.toLowerCase();
  var compareOrd="abcdefghijklmnopqrstuvwxyz";
  function compareNumbers(a,b){return a - b;}
  for(var i=0; i<strSmall.length; i++)
    	if (compareOrd.indexOf(strSmall[i])!==-1){
      		indexAlph.push(compareOrd.indexOf(strSmall[i]));
  			indexAlph.sort(compareNumbers);           
        }	
  
  for (var j=0; j<indexAlph.length; j++){
   
    	 newOrder.push(compareOrd.charAt(indexAlph[j])); 
   }
     	
       
  
  return newOrder.join("");   
}
   