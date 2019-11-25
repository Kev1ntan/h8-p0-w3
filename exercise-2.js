//Mengakses Nilai Dalam Array
console.log('Mengakses Nilai Dalam Array');
function balikString(string) {
	var a = '';
	for (let i=string.length; i>0; i--) {
		a = a + string[i-1];
	}
	return `"${a}"`;
}

// TEST CASES
console.log(balikString("hello world!"));