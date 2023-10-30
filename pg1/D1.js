/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*1. **Stringa**: Una stringa è come una catena di lettere, parole o frasi. Ad esempio, "ciao" è una stringa.

2. **Numero**: Un numero rappresenta un valore numerico. Può essere un numero intero come 5 o un numero con decimali come 3.14.

3. **Booleano**: Un booleano può essere vero (true) o falso (false). È come rispondere a una domanda con "sì" o "no".

4. **Array**: Un array è come una scatola che può contenere più oggetti. Puoi mettere diversi oggetti all'interno di un array, come una scatola di mattoncini LEGO.

5. **Oggetto**: Un oggetto è come un contenitore che può avere molte cose al suo interno. Ogni cosa all'interno dell'oggetto ha un nome, come gli oggetti in una stanza hanno nomi come "libro" o "giocattolo".

6. **Null**: Null significa che non c'è nulla. È come avere una scatola vuota anziché una scatola con qualcosa dentro.

7. **Non definito (Undefined)**: Quando qualcosa è non definito, significa che non ha un valore ancora. È come quando chiedi "Qual è il tuo colore preferito?" e la persona non ha ancora deciso.

8. **Simbolo (Symbol)**: Un simbolo è un tipo di dato unico e immutabile usato come chiave per le proprietà degli oggetti. È come avere un sigillo segreto che può aprire solo una certa porta.

9. **Funzione (Function)**: Una funzione è un blocco di codice che fa qualcosa di specifico. È come una ricetta per cucinare: hai degli ingredienti (input), segui una serie di passaggi (codice della funzione) e alla fine ottieni un piatto delizioso (output).
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Snizhana";

console.log(name);


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12;
let b = 20;
let sum = a + b;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const name = "Snizhana";
name = "Ivanova";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = x - 4;
console.log(x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = "john";

var name2 = "John";

console.log(name1 === name2);

console.log(name1.toLowerCase() === name2.toLowerCase());
