//Logic Challenge - Pasangan Angka Terbesar
console.log('Logic Challenge - Pasangan Angka Terbesar');
function pasanganTerbesar(num) {
	var string = num + '';
	var pisah = [];
	for (let i=0; i<string.length; i++) {
		pisah[pisah.length] = string[i];
	}
	var pasangan = [];
	for (let i = 0; i<pisah.length-1; i++) {
		pasangan[pasangan.length] = pisah[i]+pisah[i+1];	
	}
	for (let i=0; i<pasangan.length; i++) {
		pasangan[i] = parseInt(pasangan[i]);
	}
	for (let i=0; i<pasangan.length; i++) {
		var temp =0;
		for (let j=0; j<pasangan.length; j++) {
			if(pasangan[i]>pasangan[j]) {
			}
			else {temp = temp + pasangan[i];
				pasangan[i] = pasangan[j];
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