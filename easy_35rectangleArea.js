/*
Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, 
which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of 
the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if 
strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle 
is 3 and the height is 2 and the area of a rectangle is equal to the width * height. 
*/

function RectangleArea(strArr) { 

  // code goes here  
  var p1 = strArr[0].replace(/\D/g," ").slice(1,strArr[0].length - 1).split(" ");
  var p2 = strArr[1].replace(/\D/g," ").slice(1,strArr[1].length - 1).split(" ");
  var p3 = strArr[2].replace(/\D/g," ").slice(1,strArr[2].length - 1).split(" ");
  var p4 = strArr[3].replace(/\D/g," ").slice(1,strArr[3].length - 1).split(" ");
  var arr = [p1, p2, p3, p4];
  var sides = [];
  for (var i = 1; i < arr.length; i++)
    sides.push(Math.abs(arr[i][0] - arr[i - 1][0]), Math.abs(arr[i][1] - arr[i - 1][1]));
  return sides.filter(function(a) {return a !== 0}).sort(function(a, b) {return a > b}).slice(0,2).reduce(function(a, b) {return a * b}); 
         
}
 console.log(RectangleArea(["(1 1)","(1 3)","(3 1)","(3 3)"])); 
 console.log(RectangleArea(["(0 0)","(1 0)","(1 1)","(0 1)"])); 
 console.log(RectangleArea(["(0 0)", "(3 0)","(0 2)","(3 2)"]));
 console.log(RectangleArea(["(-1 -1)","(0 0)","(-1 0)","(0 -1)"]));
 console.log(RectangleArea(["(0 0)","(0 0)","(0 0)","(0 0)"])); 