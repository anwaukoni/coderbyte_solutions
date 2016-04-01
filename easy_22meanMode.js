/*
Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if 
the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) 
equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one 
mode. 
*/

function MeanMode(arr) {
  
 arr = arr.sort(function(a,b){return a - b}); 


 var calcMean = (arr.reduce(function(a,b){return a + b})) / arr.length; 

 var calcMode = []; 

  for (var i= 0; i < arr.length; i++){
      if ( arr[i] === arr[i+1]){
         calcMode.push(arr[i]);  
        }

  }   

 if (calcMode[0] === calcMean){
  return 1; 
 }

 return 0; 
         
}

console.log(MeanMode([5, 3, 3, 3, 1]));
console.log(MeanMode([1, 2, 3])); 
console.log(MeanMode([ 4, 4, 4, 6, 2]));