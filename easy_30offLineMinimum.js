/*
Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be 
an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The 
input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take 
out the smallest integer currently in the whole set. When finished, your program should return that new set with integers 
separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 
*/

function OffLineMinimum(strArr) { 

 var subset = []; 
 var min = 0;
 function subArrayMin (arr) { return arr.sort(function (a,b) {return Number(a)-Number(b);})[0]; }

  for (var i=0;i<strArr.length;i++) {
    if (strArr[i] == "E") { 
      min = subArrayMin (strArr.slice(0,i));
      minIndex = strArr.slice(0,i).indexOf(min);
      subset.push(Number(min));
      
      strArr = strArr.slice(0,minIndex).concat(strArr.slice(minIndex+1,i)).concat(strArr.slice(i+1));
      i -= 2;
    }

  }
  //return subset.join(",");         
         
}

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"])); 
console.log(OffLineMinimum(["1","2","E","E","3"]));
console.log(OffLineMinimum(["4","E","1","E","2","E","3","E"])); 