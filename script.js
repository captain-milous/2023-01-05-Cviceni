//form.addEventListener("submit", (e) => e.preventDefault());

class Obraz {
	constructor(autor, nazev, cena, rok) {
		this.autor = autor;
		this.nazev = nazev;
		this.cena =	cena;
		this.rok = rok;
	}
	toString() {
    	return `Obraz ${this.nazev}, má cenu ${this.cena} Kč, vznikl v roce ${this.rok} a jeho autorem je ${this.autor.toString()}`;
  	}

}

class Autor {
	constructor(jmeno, prijmeni, datumNarozeni) {
		this.jmeno = jmeno;
		this.prijmeni = prijmeni;
		this.datumNarozeni = datumNarozeni;
	}
	toString() {
    	return `${this.jmeno} ${this.prijmeni}, narozen ${this.datumNarozeni}`;
  	}
}

class Galerie {
	constructor(nazev) {
		this.nazev = nazev;
		this.galerie = [];
	}
	add(obraz) {
		this.galerie.push(obraz);
	}
	getObraz(index) {
		return this.galerie[index];
	}
	overallPrice() {
		let price = 0;
		for(var i = 0; i < this.galerie.length; i++) {
			price = price + this.galerie[i].cena;
		}
		return `Celková cena všech obrazů v galerii je ${price} Kč`;
	}
	threeMostExpensive() {
		this.galerie.sort(function(a, b){return b.cena - a.cena});
		let paintings = [];
		for(var i = 0; i < 3; i++) {
			if(i < this.galerie.length){
				paintings.push(this.galerie[i]);
			}
		}
		let output = `Tři nejdražší obrazy:\n`;
		for(var i = 0; i < paintings.length; i++) {
			var j = i + 1;
			output = output + ""+ j + ". " + paintings[i].toString() + "\n";
		}
		return output;
	}
	paintingsBy(autor) {
		let paintings = [];
		for(var i = 0; i < this.galerie.length; i++) {
			if(autor.jmeno == this.galerie[i].autor.jmeno && autor.prijmeni == this.galerie[i].autor.prijmeni && autor.datumNarozeni == this.galerie[i].autor.datumNarozeni) {
				paintings.push(this.galerie[i]);
			}
		}
		paintings.sort(function(a, b){return b.cena - a.cena});
		let output = `Obrazy od ${autor}:\n`;
		for(var i = 0; i < paintings.length; i++) {
			var j = i + 1;
			output = output + ""+ j + ". Obraz " + paintings[i].nazev + " má cenu " + paintings[i].cena + "Kč\n";
		}
		return output;
	}
}

function zkouska() {
	let autor = new Autor("Milos","Tesar",2003);
	let obraz = new Obraz(autor,"Zkouska 1",2000,2020);
	let galerie = new Galerie("Zkouska");
	galerie.add(obraz);
	autor = new Autor("Solim","Raset", 2005);
	obraz = new Obraz(autor,"Zkouska 2",2650,2021);
	galerie.add(obraz);
	obraz = new Obraz(autor,"Zkouska 3",2050,2022);
	galerie.add(obraz);
	obraz = new Obraz(autor,"Zkouska 4",2750,2022);
	galerie.add(obraz);
	return galerie;
}

let galerie = zkouska();
console.log(galerie);
console.log(galerie.overallPrice());
console.log(galerie.threeMostExpensive());
let autor = new Autor("Solim","Raset", 2005);
console.log(galerie.paintingsBy(autor));


