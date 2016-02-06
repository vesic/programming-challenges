//jshint esversion:6
var assert = require("assert");

function factorIt(num){
  var factors = {};
  while(num % 2 === 0){
    if(!isNaN(factors[2])) factors[2]++;
    else factors[2] = 1;
    num /= 2;
  }
  while(num % 3 === 0) {
    if(!isNaN(factors[3])) factors[3]++;
    else factors[3] = 1;    
    num /= 3;
  }
  while(num % 5 === 0) {
    if(!isNaN(factors[5])) factors[5]++;
    else factors[5] = 1;    
    num /= 5;
  }
  while(num % 7 === 0) {
    if(!isNaN(factors[7])) factors[7]++;
    else factors[7] = 1;    
    num /= 7;
  }
  while(num % 11 === 0) {
    if(!isNaN(factors[11])) factors[11]++;
    else factors[11] = 1;    
    num /= 11;
  }
  while(num % 13 === 0) {
    if(!isNaN(factors[13])) factors[13]++;
    else factors[13] = 1;    
    num /= 13;
  }
  if (Object.keys(factors).length !== 0) return factors;
  else return {1:1};
}

function smallestCommons(arr) {
  arr = arr.sort((a,b) => { return a-b; });
  var start = arr[0], end = arr[arr.length-1];
  arr = [];
  for(var i=start; i<=end; i++){
    arr.push(i);
  }
  var factors = [];
  for(var i=0, len=arr.length; i<len; i++){
    factors.push(factorIt(arr[i]));
  }
  var sortedFactors = {};
  for (var i = 0; i < factors.length; i++) {
    for (var j in factors[i]) {
      if (!sortedFactors.hasOwnProperty(j)) {
        sortedFactors[j] = factors[i][j];
      }
      if(sortedFactors[j] <= factors[i][j]) sortedFactors[j] = factors[i][j];
    }
  }
  var common = 1;
  for(var i in sortedFactors){
    common *= Math.pow(+i, sortedFactors[i]);
  }
  return common;
}

assert.equal(smallestCommons([1, 5]),60);
assert.equal(smallestCommons([1, 13]),360360);
