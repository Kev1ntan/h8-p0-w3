//Menggunakan Built-in Function pada Array
console.log('Menggunakan Built-in Function pada Array')
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(input) {
a = input.splice(1, 1, "Roman Alamsyah Elsharawy");
b = input.splice(2, 1, "Provinsi Bandar Lampung");
c = input.splice(4, 0,  "Pria");
d = input.splice(5, 1,  "SMA Internasional Metro");
console.log(input);
var e = input.slice(3, 4);
var f = e.toString().split("/", 3);
switch(parseInt(f[1])) {
	case 01:
	console.log("Januari");
	break;
	case 02:
	console.log("Februari");
	break;
	case 03:
	console.log("Maret");
	break;
	case 04:
	console.log("April");
	break;
	case 05:
	console.log("Mei");
	break;
	case 06:
	console.log("Juni");
	break;
	case 07:
	console.log("Juli");
	break;
	case 08:
	console.log("Agustus");
	break;
	case 09:
	console.log("September");
	break;
	case 10:
	console.log("Oktober");
	break;
	case 11:
	console.log("November");
	break;
	case 12:
	console.log("December");
	break;
	default:
	console.log("masukkan bulan 1-12");
	break;
}
var g = [parseInt(f[0]), parseInt(f[1]), parseInt(f[2])]
var h = g.sort();
var i = [h[0].toString(), h[1].toString(), h[2].toString()]
var j = [i[0], i[1], '0'+i[2]]
console.log(j);
var k = f.join('-');
console.log(k);
var l = input[1].slice(0,15);
console.log(l);
};

// TEST CASES
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
 