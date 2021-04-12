// creazione di 2 prompt
// l'utente deve inserire 2 numeri (devo validare i dati inseriti?)
var num1 = parseInt(prompt("Inserisci il primo numero"))
var num2 = parseInt(prompt("Inserisci il secondo numero"))

// devo validare i dati inseriti
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Uno o entrmabi i numeri non sono validi.");
} else {
    // Controllo quale dei 2 numeri è maggiore
    var numeroMaggiore;

    if (num1 > num2) {
        numeroMaggiore = num1
    } else if (num2 > num1) {
        numeroMaggiore = num2
    }

    if (typeof numeroMaggiore === "number") {
        // Stampo in console il numero maggiore
        console.log("Il numero maggiore è" + numeroMaggiore)
    } else {
        // Caso in cui i numeri sono pari
        console.log("I due numeri sono uguali")
    }
}



