/*
Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored in arr and return 
the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: 
if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers 
were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains 
only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should 
return -1. Indexing should begin with 0. 
*/

function ChangingSequence(arr) { 
  
  for (var i = 0; i < arr.length; i++ ){

      if (arr[0] < arr[1]){  //increasing
        if (arr[i] > arr[i+1]){
          return arr.lastIndexOf(arr[i]); //In case of duplicated use last Index to find the last place of element
        }
      }

     if (arr[0] > arr[1]){  //decreasing

        if (arr[i] < arr[i+1]){
          return arr.lastIndexOf(arr[i]); 
        }
        
      }
   }
   return -1;         
}

console.log(ChangingSequence([5, 4, 3, 2, 10, 11])); 