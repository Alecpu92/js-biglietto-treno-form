// Var dichiarate
let chilometri, offerta, totalPrice, finalPrice;
const kmPrice = 0.21;

// selezione elementi di pagina
const genera = document.getElementById("genera")
const aggiorna = document.getElementById("annulla")

// Invio dati con click

genera.addEventListener("click", function() {

  // chiedere nome utente
  let userName = document.getElementById("name").value
  console.log("nome passeggero = " , userName)

// Chiedere distanza da percorrere in km all'utente
chilometri = document.getElementById("km").value;
console.log("chilometri da percorrere = ",chilometri)


// Chiedere età all'utente
let userAge = document.getElementById("age").value
console.log("età passeggero = ", userAge);

// Prezzo base biglietto
let basePrice = chilometri = kmPrice

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

// creazione biglietto

// far spawnare il biglietto
document.getElementById("output_biglietto").classList.add("active")

// assegnazione offerta
document.getElementById("offerta").innerHTML = offerta

// inserire nome nel biglietto
document.getElementById("prezzo_biglietto").innerHTML =userName;

// inserire prezzo nel biglietto
document.getElementById("prezzo_biglietto").innerHTML = (finalPrice)

});

// aggiornamento pagina con "annulla"
aggiorna.addEventListener("click", function() {
  location.href = location.href;
 });