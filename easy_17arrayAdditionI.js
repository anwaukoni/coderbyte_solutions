// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string 
// true if any combination of numbers in the array can be added up to equal the largest number in the 
// array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output 
// should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the 
// same elements, and may contain negative numbers. 

function ArrayAdditionI(arr) { 
  
  // sort array ascending
  arr = arr.sort( function(a,b){return a - b});
  
  var max = arr.pop();
  
  function lookForSolution(){
    function search(sum,i) {
      if ( sum == max ) {
        return true;
      }
      else if ( sum > max || i == arr.length ) {
        return null;
      }
      else {
        return search(sum + arr[i],i + 1) ||
               search(sum,i + 1);
      }
    }
    
    // start search with sum of zero in position zero:
    return search(0,0);
  }
  return lookForSolution() || false; 
         
}
