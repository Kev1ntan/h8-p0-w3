//Melakukan Looping Data Array
console.log('Melakukan Looping Data Array');
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

function dataHandling(input) {
	var a = ["Nomor ID:  ", "Nama Lengkap:  ", "TTL:  ", "Hobi:  "];
	for (let i=0; input.length>i; i++) {
		for (let j=0; input[i].length>j; j++) {
			var b ='';
			if(j==2) {
				b = a[j]+input[i][j]+' '+input[i][j+1];
				console.log(b);
			}
			else if (j==3) {
				b = a[j]+input[i][j+1];
				console.log(b);
			}
			else if (j==4) {
				b='';
				console.log(b);
			}
			else {b = a[j]+input[i][j];
				console.log(b);
			}
		}
	}
}

// TEST CASES
console.log(dataHandling(input));