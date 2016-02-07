function every(collection, pre) {
  var i, len = collection.length,
    valid = true;
  for (i = 0; i < len; i++) {
    if (!(collection[i].hasOwnProperty(pre) && collection[i][pre])) valid = false;
  }
  if (valid) return true;
  return false;
}
