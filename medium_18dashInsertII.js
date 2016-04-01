/*
Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and 
insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. 
Don't count zero as an odd or even number. 
*/

function DashInsertII(num) { 

  
  num = num.toString().split('');
  var answer = ''; 

  for (var i=0 ; i < num.length; i++){
      if((i > 0) && num[i] % 2 !== 0 && num[i-1] % 2 !== 0){
        answer+="-";
      }else if(num[i]!=0 && num[i-1]!=0 && (i > 0) && num[i] % 2 == 0 && num[i-1] % 2 == 0){
        
          answer += "*";
        

      }
    answer+= num[i]
  }  
  return answer;       
}

console.log(DashInsertII(10120));
console.log(DashInsertII(56647304));