// https://www.freecodecamp.org/challenges/sorted-union
function uniteUnique(arr) {
  var vessel = [];
  /*Let's "flatten" the input*/
  for (var i = 0; i<arguments.length; i++){
    vessel = vessel.concat(arguments[i]);
  }
  /*Time to erase the duplicates!*/
  for (var k = 0; k < vessel.length; k++){
    if (-1 == arr.indexOf(vessel[k])) arr.push(vessel[k]);
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
