// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of 
// each word. Words will be separated by only one space. 

	function LetterCapitalize(str) { 

		var Letter=[];
		Letter=str.split(" ");

		for (var i=0; i<Letter.length; i++){
			Letter[i]=Letter[i].charAt(0).toUpperCase() + Letter[i].substring(1);
		}
		  
		return Letter.join(" "); 
	     
	}