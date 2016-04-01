/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" 
if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference 
between each of the numbers is consistent, where as in a geometric sequence, each term after the first is 
multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 
*/

function ArithGeo(arr){

var arithDiff=[]; 
var geoDiff=[]; 
var arithmetic=true; 
var geometric=true; 
	for (var i=0; i < arr.length-1; i++){
		arithDiff.push(arr[i+1]-arr[i]); 
		geoDiff.push(arr[i+1]/arr[i]); 
	} 

	for (var j = 0; j < arithDiff.length-1; j++){
		if (arithDiff[j]!= arithDiff[j + 1]){
			arithmetic=false; 
		}
	}

	for (var k = 0; k < geoDiff.length-1; k++){
		if (geoDiff[k]!= geoDiff[k+1]){
			geometric=false; 
		}
	}
	
	if (arithmetic){
		return "Arithmetic"; 
	}else if (geometric){
		return "Geometric"; 
	}else{
		return -1; 
	}

}