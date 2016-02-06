// jshint esversion:6
var assert = require("assert");

function where(collection, source){
  var arr = [];
  for(var i = 0; i < collection.length; i++) {
    var keys = Object.keys(source);
    var valid = true;
    for(var j = 0; j < keys.length; j++) {
      if(!collection[i].hasOwnProperty(keys[j])) {
        valid = false;
        break; 
      }
      if(collection[i][keys[j]] !== source[keys[j]]) {
        valid = false;
        break;
      }
    }
    if(valid) arr.push(collection[i]);
  }
  return arr;
}

assert.deepEqual(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }]);
assert.deepEqual(where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }), [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
assert.deepEqual(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }), [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);