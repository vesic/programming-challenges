//jshint esversion:6
function sumFibs(num) {
  var total = 1, a = 1, b = 1;
  while(a <= num){
    if(a % 2 !== 0) total += a;
    a = a + b;
    b = a - b;
  }
  return total;
}