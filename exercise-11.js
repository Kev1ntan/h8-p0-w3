//Logic Challenge - Tentukan Deret Aritmatika
console.log('Logic Challenge - Tentukan Deret Aritmatika')
function tentukanDeretAritmatika(arr) {
	var a = 0;
	for ( let i = 0; i<arr.length-1; i++) {
		a = a + arr[i]-arr[i+1];
	}
	if ((a/(arr.length-1))==(arr[0]-arr[1])) {
		return true
	}
	else {return false}
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false