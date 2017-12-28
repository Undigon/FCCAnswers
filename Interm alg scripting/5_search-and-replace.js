function capit(a, b){
	a = a.split("");
	b = b.split("");
	//Checking!
	//return a[0].match(/A-Z]/);
	if (a[0].match(/[A-Z]/)!=null){
	  b[0] = b[0].toUpperCase();}
	else {
	  b[0] = b[0].toLowerCase();}
	return b.join("");
}
/*Esta función aplica la capitalización de la*
 *primer letra de before a after, busca la   *
 *posición de before en str y escribe after  *
 *en la posición de before.                  */
function myReplace(str, before, after){
	str = str.split(" ");
	var i = str.indexOf(before);
	//Checking
	//return capit(before, after);
	after = capit(before, after);
	str.splice(i, 1, after);
	str = str.join(" ");
	return str;
}
