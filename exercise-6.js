//Logic Challenge - Number Palindrome
console.log('Logic Challenge - Number Palindrome');
function angkaPalindrome(num) {
	while(num<num+1) {
		var angka = num + '';
		var pisah = [];
		for (let i=0; i<angka.length; i++) {
			pisah[pisah.length] = angka[i];
		}
		var balik = [];
		for (let i=pisah.length; i>0; i--) {
			balik[balik.length] = pisah[i-1];
		}
		var join = '';
		for (let i=0; i<balik.length; i++) {
			join = join + balik[i];
		}
		var number = parseInt(join);
		if (num==number) {
		return number;
		}
		else {num++;};
	}
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001