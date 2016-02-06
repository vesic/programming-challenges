// jshint esversion:6
var assert = require("assert");

function convert(num) {
  num = String(num).split("").reverse();
  console.log(num);
  var decimalNumbers = {};
  var i;
  for(i = 0; i < num.length; i++) {
    decimalNumbers[i] = num[i];
  }
  var romanOutput = [];
  for(i in decimalNumbers) {
    var lookUp = Math.pow(10, i) * decimalNumbers[i];
    var roman = romanNumerals[lookUp];
    if(typeof roman !== "undefined")
      romanOutput.unshift(roman);
  }
  return romanOutput.join('');
}

// romans lookup
var romanNumerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
  4000: "MMMM"
};

assert.equal(convert(2), "II");
assert.equal(convert(3), "III");
assert.equal(convert(29), "XXIX");
assert.equal(convert(83), "LXXXIII");
assert.equal(convert(99), "XCIX");
assert.equal(convert(649), "DCXLIX");
assert.equal(convert(1023), "MXXIII");
assert.equal(convert(2014), "MMXIV");
assert.equal(convert(3999), "MMMCMXCIX");
