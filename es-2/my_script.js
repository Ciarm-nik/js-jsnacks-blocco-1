// Inserisci la prima parola
var parola1 = prompt("Inserisci la prima parola");

// Inserisci la seconda parola
var parola2 = prompt("Inserisci la seconda parola");

var risultato
// Verifico la prima parola
if (parola1.length < parola2.length) {
    risultato = parola1
    console.log ("La parola più corta è: " + risultato)
    risultato = parola1
// Verifico la seconda parola
} else if (parola2.length < parola1.length) {
    risultato = parola2
console.log("La parola più corta è: " + risultato)
}

