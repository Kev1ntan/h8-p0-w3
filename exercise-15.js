//Logic Challenge - Mengelompokkan Hewan
console.log('Logic Challenge - Mengelompokkan Hewan');
function groupAnimals(animals) {
	var alpha = 'abcdefghijklmnopqrstuvwxyz'
	var hasil = [];
	var index = 0;
	for (let j=0; j<alpha.length; j++) {
		for (let i =0; i<animals.length; i++) {
			if (animals[i][0]==alpha[j]) {
				if (hasil.length==0) {
					hasil.push([animals[i]])
				}
				else if(animals[i][0]==hasil[index][0][0]) {
					hasil[index].push(animals[i])
				}
				else {
					index++;
					hasil[index]=[animals[i]]
				}
			}
		}
	}
	return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


























