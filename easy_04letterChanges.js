/*
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

function LetterChanges(str) { 
	var answer="";
 	var oldAlpha="abcdefghijklmnopqrstuvwxyz";
    var newAlpha="bcdefghijklmnopqrstuvwxyza";
  	var myRegExp=/[aeiou]/;
    
    for(var i=0; i<str.length; i++){
      if (oldAlpha.indexOf(str[i])!==-1){
        //var index=oldAlpha.indexOf(str[i]);
        answer+=newAlpha.charAt(oldAlpha.indexOf(str[i]));
      }else{
        answer+=str[i];
      }
    }
  
	var capitalized = answer.replace(/a|e|i|o|u/gi, function(vowel) { 
    return vowel.toUpperCase();
  	});
  return capitalized; 
         
}