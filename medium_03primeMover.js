/*
Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 
16th prime number. 
*/ 

function PrimeTime(number) {

  if(number < 2 || number != Math.round(number)){
    return false;
  }

  for(var i = 2; i < number; i++){
    if(number%i == 0){
      return false;
    }
  }
  return true;
};

function PrimeMover(num) {
  var primeArray = [];                  //Stores all the prime numbers

  if(num == 0){                         //Initial check
    return 1;
  }

  for(var i = 1; i < 100000; i++){        //Loops from 1 to 100000 checking for prime numbers. If there is one then it
    if(PrimeTime(i)){                   //If there is one then it gets pushed into the array.
      primeArray.push(i);
    }
  }
  return primeArray[num-1];               //returns the nth element of the array with num.
}

console.log(PrimeMover(9));
console.log(PrimeMover(100));