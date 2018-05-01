/* https://www.freecodecamp.org/challenges/sum-all-primes */

function sumPrimes(num) {
  var winners=[2];
  /*All primes are odd except 2*/
  for (var i=3;i<=num;i+=2){
    var pass = 1;
    /*We check primicity against our list*/
    for (var k=0;k<winners.length;k++){
      if (i%winners[k] == 0) pass = 0;
    }
    /*If it hasn't failed, include it*/
    if (pass) {winners.push(i);}
  }
  for (var j=1;j<winners.length;j++){winners[0] += winners[j];}
  return winners[0];
}

sumPrimes(10);
