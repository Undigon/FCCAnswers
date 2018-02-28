// https://www.freecodecamp.org/challenges/sorted-union
function uniteUnique(arr) {
  var i = 0;
  var acc = [];
  //flattens the arguments to a single array
  for (i;i<arguments.length;i++){
    acc = acc.concat(arguments[i]);
  }
  //checks the element at the j-th position
  //for any duplicates at the k-th pos.
  for (var j=0;j<acc.length-1;j++){
    var k=j+1;
    while (k<acc.length){  /*k is inside acc*/
      if (acc[j]==acc[k]){ /*deletes k-th and rechecks k-th*/
        acc.splice(k, 1);
      }
      else {               /*adds 1 to k and rechecks k-th*/
        k++;
      }
    }
  }
  arr = acc;
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
