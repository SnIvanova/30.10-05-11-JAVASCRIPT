function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstfunction() {
    console.log(getRandomNumber(1, 10));
}

function printString() {
    console.log("hello world");
}

firstfunction();

printString();

function somma() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

let smt = somma(1, 2, 3, 4, 5); // Pass arguments to the somma function
console.log(smt);

let smt2 = somma(smt, 10); // Pass the result of somma function and 10 as arguments
console.log(smt2);
