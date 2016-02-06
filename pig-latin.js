// jshint esversion:6
var assert = require("assert");

function translate(str) {
  var vowels = "aeiou",
      first = str[0];
  var inVowels = vowels.indexOf(first) !== -1;
  if (inVowels) {
    str = str + "way";
  }
  else {
    var firstNonVowel = str.search(/[aeiou]/);
    str = str.slice(firstNonVowel) + str.slice(0, firstNonVowel) + "ay";
  }
  return str;
}

assert.equal(translate("california"),"aliforniacay");
assert.equal(translate("paragraphs"), "aragraphspay");
assert.equal(translate("glove"), "oveglay");
assert.equal(translate("algorithm"), "algorithmway");
assert.equal(translate("eight"), "eightway");
