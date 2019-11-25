//Logic Challenge - Palindrome
console.log('Logic Challenge - Palindrome');
function palindrome(kata) {
	var pisah = [];
	for (let i=0; i<kata.length; i++) {
		pisah[pisah.length] = kata[i];
	}
	var putar = [];
	for (let i=pisah.length; 0<i; i--) {
		putar[putar.length]=pisah[i-1];
	}
	var gabung = '';
	for (let i=0; i<putar.length; i++) {
		gabung = gabung + putar[i];
	}
	if (kata==gabung) {
	return true;}
	else { return false;}
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false