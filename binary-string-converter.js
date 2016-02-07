function binaryAgent(str) {
  return str.split(' ').map(function(char) {
    return String.fromCharCode(parseInt(char, 2));
  }).join('');
}