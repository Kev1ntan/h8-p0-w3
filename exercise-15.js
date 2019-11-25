//Logic Challenge - Mengelompokkan Hewan
console.log('Logic Challenge - Mengelompokkan Hewan');
function groupAnimals(animals) {
	var hasil = [];
	var a = [];
	var b = [];
	var c = [];
	var d = [];
	var e = [];
	var f = [];
	var g = [];
	var h = [];
	var i = [];
	var j = [];
	var k = [];
	var l = [];
	var m = [];
	var n = [];
	var o = [];
	var p = [];
	var q = [];
	var r = [];
	var s = [];
	var t = [];
	var u = [];
	var v = [];
	var w = [];
	var x = [];
	var y = [];
	var z = [];
	for (let i = 0; i<animals.length; i++) {
		var input = animals[i].charAt(0);
		switch (input) {
			case 'a' : a[a.length] = animals[i];
			break;
			case 'b' : b[b.length] = animals[i];
			break;
			case 'c' : c[c.length] = animals[i];
			break;
			case 'd' : d[d.length] = animals[i];
			break;
			case 'e' : e[e.length] = animals[i];
			break;
			case 'f' : f[f.length] = animals[i];
			break;
			case 'g' : g[g.length] = animals[i];
			break;
			case 'h' : h[h.length] = animals[i];
			break;
			case 'i' : i[i.length] = animals[i];
			break;
			case 'j' : j[j.length] = animals[i];
			break;
			case 'k' : k[k.length] = animals[i];
			break;
			case 'l' : l[l.length] = animals[i];
			break;
			case 'm' : m[m.length] = animals[i];
			break;
			case 'n' : n[n.length] = animals[i];
			break;
			case 'o' : o[o.length] = animals[i];
			break;
			case 'p' : p[p.length] = animals[i];
			break;
			case 'q' : q[q.length] = animals[i];
			break;
			case 'r' : r[r.length] = animals[i];
			break;
			case 's' : s[s.length] = animals[i];
			break;
			case 't' : t[t.length] = animals[i];
			break;
			case 'u' : u[u.length] = animals[i];
			break;
			case 'v' : v[v.length] = animals[i];
			break;
			case 'w' : w[w.length] = animals[i];
			break;
			case 'x' : x[x.length] = animals[i];
			break;
			case 'y' : y[y.length] = animals[i];
			break;
			case 'z' : z[z.length] = animals[i];
			break;
			default:
			return 'not a string a-z';
		}
	}
	hasil.push(a);
	hasil.push(b);
	hasil.push(c);
	hasil.push(d);
	hasil.push(e);
	hasil.push(f);
	hasil.push(g);
	hasil.push(h);
	hasil.push(i);
	hasil.push(j);
	hasil.push(k);
	hasil.push(l);
	hasil.push(m);
	hasil.push(n);
	hasil.push(o);
	hasil.push(p);
	hasil.push(q);
	hasil.push(r);
	hasil.push(s);
	hasil.push(t);
	hasil.push(u);
	hasil.push(v);
	hasil.push(w);
	hasil.push(x);
	hasil.push(y);
	hasil.push(z);
	for (let i =0; i<hasil.length; i++) {
		if (hasil[i].length==0) {
			hasil.splice(i,1);
			i--;
			hasil.length-1;
		}
	}
	return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


