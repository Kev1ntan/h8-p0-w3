//Logic Challenge - Number Palindrome
console.log('Logic Challenge - Number Palindrome');
function angkaPalindrome(num) {
	num+=1;
	while(num<num+1) {
		var angka = num + '';
		var sesudah = '';
		for (let i=angka.length; i>0; i--) {
			sesudah = sesudah + angka[i-1]
		}
		if (num==sesudah) {
		return num;
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