// Var dichiarate
const kmPrezzo = 0.21;
let discount;

// Chiedere distanza da percorrere in km all'utente
var distanza = (prompt("inserisci la distanza che vuoi percorrere in (km)"));


// Chiedere età all'utente

var utenteEtà = (prompt("Inserisci la tua età"));

// Condizioni per lo sconto
if(utenteEtà < 18){
  discount = 0.2;

}else if(utenteEtà >= 65){
  discount = 0.4;
}else{
  discount = 0;
}

// Calcolare il prezzo del biglietto con i possibili sconti
const amount = (distanza * kmPrezzo);
const costoBiglietto = amount - (amount * discount);

// Inner Html e somma da pagare
document.getElementById("età").innerHTML = utenteEtà;
document.getElementById("distanza").innerHTML = distanza;
document.getElementById("ticket_price").innerHTML = costoBiglietto.toFixed(2)