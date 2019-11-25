//Melakukan Looping Data Array
console.log('Melakukan Looping Data Array');
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(input) {
	var hasil1 = '';
	var hasil2 = '';
	var a = ["Nomor ID:  ", "Nama Lengkap:  ", "TTL:  ", "Hobi:  "];
	for (let i=0; input.length>i; i++) {
		if (i==0) {
			for (let j=0; input[i].length-1>j; j++) {
				var b ='';
				if(j==2) {
					b = a[j]+input[i][j]+' '+input[i][j+1];
					b = b + '\n';
				}
				else if (j==3) {
					b = a[j]+input[i][j+1];
				}
				else {b = a[j]+input[i][j];
					b = b + '\n';
				}
				hasil1 = hasil1 + b;
			}
		}
		else {
			for (let j=0; input[i].length-1>j; j++) {
				var b ='';
				if (j==0) {b = '\n' +a[j]+input[i][j];
				}
				else if(j==2) {
					b = a[j]+input[i][j]+' '+input[i][j+1];
				}
				else if (j==3) {
					b = a[j]+input[i][j+1];
				}
				else {b = a[j]+input[i][j];
				}
				hasil2 = hasil2 + '\n' + b
			}
		}
	}
	return hasil1+hasil2;
}

// TEST CASES
console.log(dataHandling(input));