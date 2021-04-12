
var numeriInseriti = []
var somma = 0;


for (var i = 0; i < 10; i++) {

    var numero = parseInt(prompt("Inserisci un numero Ne mancano " + (10 - i)));

    if (Number.isNaN(numero)) {
        alert("Hai inserito un numero sbagliato")

        i--
    } else {
        numeriInseriti.push(numero);

        somma += numero;
    }

}
console.log("La somma dei numeri è " + somma);
console.log("L'utente ha inserito i seguenti numeri " + numeriInseriti.join(""));




