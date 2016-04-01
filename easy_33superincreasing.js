/*
Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and 
determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of 
all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing 
sequence isn't formed, then your program should return the string "false" 
*/

function Superincreasing(arr) {
    
    compareNum = [];
  
  
  for (var i = arr.length - 1; i > 0; i--){
      compareNum.splice(0,0,arr[i]);
      arr.pop(arr[i]);  
      var addedRest = arr.reduce(function(a,b){
          return a + b;
        });

        if (addedRest >= compareNum[0]){
          return false; 
        }

    }

    return true; 
    
         
}

console.log(Superincreasing([1,2,5,10]));