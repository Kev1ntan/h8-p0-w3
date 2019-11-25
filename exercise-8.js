//Logic Challenge - Pasangan Angka Terbesar
console.log('Logic Challenge - Pasangan Angka Terbesar');
function pasanganTerbesar(num) {
	var string = num + '';
	var pasangan = [];
	for (let i = 0; i<string.length-1; i++) {
		pasangan[pasangan.length] = string[i]+string[i+1];	
	}
	for (let i=0; i<pasangan.length; i++) {
		var temp =0;
		for (let j=0; j<pasangan.length; j++) {
			if(parseInt(pasangan[i])>parseInt(pasangan[j])) {
			}
			else {temp = temp + parseInt(pasangan[i]);
				pasangan[i] = parseInt(pasangan[j]);
				pasangan[j] = temp;
				temp = 0;}
		}
	}
	return pasangan[pasangan.length-1];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99