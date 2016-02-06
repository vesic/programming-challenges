//jshint esversion:6
var assert = require("assert");

function sumPrimes(num) {
  function isPrime(value) {
    for(var i=2; i<=Math.sqrt(value); i++){
      if(value % i === 0) return false;
    }
    return true;
  }
  var sum = 0;
  for(var i=2; i<=num;i++){
    if(isPrime(i)) sum += i;
  }
  return sum;
}

assert.equal(sumPrimes(977), 73156);