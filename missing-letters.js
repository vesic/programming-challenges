// jshint esversion:6
var assert = require("assert");

function code(char) {
  return char.charCodeAt(0);
}

function fearNotLetter(str) {
  var len = str.length;
  for (var i = 0, j = 1; i < len, j < len; i++, j++) {
    if ( code(str[j]) - code(str[i]) !== 1 ) {
      return String.fromCharCode( code( str[i] ) + 1 );
    }
  }
}

assert.equal(fearNotLetter("abce"), "d");
assert.equal(fearNotLetter("abcdefghjklmno"), "i");
assert.equal(fearNotLetter("bcd"), undefined);