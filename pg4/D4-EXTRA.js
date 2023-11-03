// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
let array = [ 1, 2, 3, 4, 5, 6, 7];

function checkArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 5) {
            console.log(array[i] + " è maggiore di 5");
        } else {
            console.log(array[i] + " non è maggiore di 5");
        }
    }
}

checkArray(array);


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

    let shoppingCart = [ 
        {price: 10, name: 'item1', id: 1, quantity: 1}, 
        {price: 20, name: 'item2', id: 2, quantity: 1}
    ];

function shoppingCartTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].price * array[i].quantity;
    }
    return total;
}
console.log(shoppingCartTotal(shoppingCart));


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === item.id) {
            array[i].quantity++;
            return array.reduce((total, item) => total + item.quantity, 0);
        }
    }
    array.push(item);
    return array.reduce((total, item) => total + item.quantity, 0);
}

console.log(addToShoppingCart(shoppingCart, {price: 30, name: 'item3', id: 3, quantity: 1})); 
   

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].price > array[0].price) {
            array[0] = array[i];
        }
    }
    return array[0];
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(array) {
    return array[array.length - 1];
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(x) {
    let count = 0;
    while (count < 3) {
        let randomNum = Math.floor(Math.random() * 10);
        console.log(randomNum);
        if (randomNum > x) {
            count++;
        } else {
            count = 0;
        }
    }
}

loopUntil(2);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

function average(array) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += array[i];
            count++;
        }
    }
    return sum / count;
}

console.log(average([1, 2, 'a', 3, 'b', 4, 5]));



/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

function longest(array) {
    let longest = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
}
console.log(longest(['short', 'medium', 'longest', 'long']));



/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

function isNotSpam(emailContent) {
    let lowerCaseEmail = emailContent.toLowerCase();
    if (lowerCaseEmail.includes('spam') || lowerCaseEmail.includes('scam')) {
        return false;
    } else {
        return true;
    }
}

console.log(isNotSpam('Hello, this is a SPAM email.'));
console.log(isNotSpam('Hello, this is a legitimate email.')); 


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function daysPassed(date) {
    let date1 = new Date(date);
    let date2 = new Date();
    return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

console.log(daysPassed('2023-11-03'));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
