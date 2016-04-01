/* Medium
Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word 
with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it 
has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. 
Words will be separated by spaces. 
*/

function LetterCount(str) {

    var words = str.split(" ");
    var largestDif = 0;
    var answer;

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var currentWordLength = words[i].length;
        var currentWordSorted = words[i].split("").sort();
        for (var j = 0; j < (words[i].length - 1); j++) {
            if (currentWordSorted[j] === currentWordSorted[j + 1]) {
                currentWordSorted.splice(j, 1);
            }
            var currentDif = (currentWordLength - currentWordSorted.length);
            if (currentDif > largestDif) {
                largestDif = currentDif;
                answer = currentWord;
            }
        }
    }
    
    if (largestDif > 0) {
        return answer;
    } else {
        return -1;
    }

}

console.log(LetterCount("Hello apple pie")); 
console.log(LetterCount("No words")); 