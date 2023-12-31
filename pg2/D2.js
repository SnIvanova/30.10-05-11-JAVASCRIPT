/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 10;
let y = 20;

if (x > y) {
  console.log(x + " più grande di " + y);
} else {  
  console.log(y + " più grande di " + x);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 6;
if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let n1 = 15;
if (n1 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let n2 = 8;
let n3 = 6;

if (n2 === 8 || n3 === 8 ||(n2 + n3) === 8 || (n2 - n3) === 8 || (n3 - n2) === 8) {
  console.log("equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 400;
let spedizione = 10;

if (totalShoppingCart > 50) {;
  console.log('totale', totalShoppingCart);
} else {
  console.log('totale', totalShoppingCart+ spedizione);
} 


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sconto =totalShoppingCart * 0.2;
let discountprice = totalShoppingCart - sconto;

if (totalShoppingCart > 50) {
  console.log('totale con sconto', discountprice);
} else {
  console.log('totale con sconto', discountprice + spedizione);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let val = 7;
let val2 = 10; 
let val3 = 8;

if (val >= val2 && val >= val3) {
  if (val2 >= val3) {
    console.log(val, val2, val3); 
  } else {
    console.log(val, val3, val2); 
  }
} else if (val2 >= val && val2 >= val3) {
  if (val >= val3) {
    console.log(val2, val, val3); 
  } else {
    console.log(val2, val3, val); 
  }
} else {
  if (val >= val2) {
    console.log(val3, val, val2); 
  } else {
    console.log(val3, val2, val); 
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if (typeof val === "number") {
  console.log("numero");
} else {
  console.log("none numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


if (val % 2 === 0) {
  console.log("pari");
} else {
  console.log("dispari");
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val5 = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = 'Toronto';
console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/


me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const somenum = [];
somenum.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(somenum);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
somenum.splice(9, 1, 100);
console.log("numbers after splice", somenum);