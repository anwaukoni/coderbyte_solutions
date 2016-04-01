// Have the function VowelCount(str) take the str string parameter being passed and return the number of 
// vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this 
// challenge. 

function VowelCount(str){ 
  var result=0;	
  var allLower= str.toLowerCase();
  var myRegExp= /[aeiou]/;
  for (var i=0; i<allLower.length; i++){
    var matchTheChar=allLower.charAt(i);
  	if ( myRegExp.test(matchTheChar)){
     result++; 
    }
   
  }  
  
	return result; 
         
}
