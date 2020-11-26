function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //var s = str.split(''); //se convierten en array
  //var t = target.split('');
  var x = [];
  for (var i = 1; i <= str.split('').length; i++) {
    if (target.split('')[target.length - i] == str[str.length-i]) {
    x[target.length - i] = target[target.length - i];
    }
  }
  var z = x.join('');
  if (z == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
