//Menggunakan Built-in Function pada Array
console.log('Menggunakan Built-in Function pada Array')
var input = ['"0001"', "Roman Alamsyah ", "Bandar Lampung", ' "21/05/1989"', "Membaca"];
function dataHandling2(input) {
input.splice(1, 1, ' "Roman Alamsyah Elsharawy"');
input.splice(2, 1, ' "Provinsi Bandar Lampung"');
input.splice(4, 0, ' "Pria"');
input.splice(5, 1, ' "SMA Internasional Metro"');
var hasil = `[${input}]`;
var e = input.slice(3, 4);
var ef = e.toString().substring(2,12)
var f = ef.split("/", 3);
switch(parseInt(f[1])) {
	case 01:
	hasil = hasil + '\n' +"Januari";
	break;
	case 02:
	hasil = hasil + '\n' +"Februari";
	break;
	case 03:
	hasil = hasil + '\n' +"Maret";
	break;
	case 04:
	hasil = hasil + '\n' +"April";
	break;
	case 05:
	hasil = hasil + '\n' +"Mei";
	break;
	case 06:
	hasil = hasil + '\n' +"Juni";
	break;
	case 07:
	hasil = hasil + '\n' +"Juli";
	break;
	case 08:
	hasil = hasil + '\n' +"Agustus";
	break;
	case 09:
	hasil = hasil + '\n' +"September";
	break;
	case 10:
	hasil = hasil + '\n' +"Oktober";
	break;
	case 11:
	hasil = hasil + '\n' +"November";
	break;
	case 12:
	hasil = hasil + '\n' +"December";
	break;
	default:
	hasil = hasil + '\n' +"masukkan bulan 1-12";
	break;
}
var g = [parseInt(f[0]), parseInt(f[1]), parseInt(f[2])]
var h = g.sort();
var i = [h[0].toString(), h[1].toString(), h[2].toString()]
var j = `"${i[0]}", "${i[1]}", "0${i[2]}"`
hasil = `${hasil}\n[${j}]`;
var k = f.join('-');
hasil = hasil + '\n' + k;
var l = input[1].slice(2,16);
hasil = hasil + '\n' +l;
return hasil;
};

// TEST CASES
console.log(dataHandling2(input));
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
 