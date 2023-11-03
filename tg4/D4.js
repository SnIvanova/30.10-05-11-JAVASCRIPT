function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function firstfunction() {
    console.log(getRandomNumber(1, 10));

}

function printString() {
    console.log("hello world")
}

firstfunction();

printString();