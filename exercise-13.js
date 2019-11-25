//Logic Challenge - Target Terdekat
console.log('Logic Challenge - Target Terdekat')
function targetTerdekat(arr) {
	var x1 = arr.indexOf('x')
	var o1 = arr.indexOf('o')
	if (x1>=o1 && x1!=-1 && o1!=-1) { 
	var a = x1-o1;
	}
	else if(x1<=o1 && x1!=-1 && o1!=-1) {
	var a = o1-x1;
	}
	else {return 0}
	var balik = [];
	for (let i =arr.length; 0<i; i-- ) {
		balik[balik.length] = arr[i-1];
	}
	var x2 = balik.indexOf('x');
	var o2 = balik.indexOf('o');
	if (x2>=o2 && x2!=-1 && o2!=-1) {
	var b = x2-o2;
	}
	else if(x2<=o2 && x2!=-1 && o2!=-1) {
	var b = o2-x2;
	}
	else {return 0}
	if (a>=b) {
		return b
	}
	else if (a<=b ) {
		return a
	}
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2