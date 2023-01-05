form.addEventListener("submit", (e) => e.preventDefault());

class Obraz {
	constructor(autor, nazev, cena, rok) {
		this.autor = autor;
		this.nazev = nazev;
		this.cena =	cena;
		this.rok = rok;
	}

}

class Autor {
	constructor(jmeno, prijmeni, datumNarozeni) {
		this.jmeno = jmeno;
		this.prijmeni = prijmeni;
		this.datumNarozeni = datumNarozeni;
	}
}