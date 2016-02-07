//jshint esversion:6
var assert = require("assert");

function steamroller(arr) {
  arr = arr.toString().split(',');
  var flatten = [];
  for(var i=0; i<arr.length; i++){
    if(arr[i]){
      if(arr[i] === "[object Object]") flatten.push({})
      else if(!isNaN(parseInt(arr[i]))) flatten.push(Number(arr[i]));
      else flatten.push(arr[i]);
    }
  }
  return flatten;
}

assert.deepEqual(steamroller([[["a"]], [["b"]]]), ["a", "b"])
assert.deepEqual(steamroller([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
assert.deepEqual(steamroller([1, [], [3, [[4]]]]), [1, 3, 4]);
assert.deepEqual(steamroller([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
