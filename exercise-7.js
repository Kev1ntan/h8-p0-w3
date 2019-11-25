//Logic Challenge - Menghitung Jumlah Kata
console.log('Logic Challenge - Menghitung Jumlah Kata');
function hitungJumlahKata(kalimat) {
	var hasil = [];
	var temp = '';
	for (let i=0; i<kalimat.length+1; i++) {
		if (kalimat[i]!=' ' && i!=kalimat.length) {
			temp = temp + kalimat[i];
		}
		else if (kalimat[i]==' ' || i==kalimat.length) {
			hasil[hasil.length] = temp;
			temp = '';
		}
	}
	return hasil.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5