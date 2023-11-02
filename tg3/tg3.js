switch(value) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    default:
        console.log('default');
        break;
}

let value = 1;
let value2 = 2;
while (value2 < 10) {
    console.log(value2);
    //value2 += 1;
    value2++;

}

let sum = 0;
while (true) {
    let v = prompt('enter a number');
    if (v === "end" || v === null) {
        break;
    }
    if (isNaN(Number(v))) {
        console.log('not a number');
        continue;
    } else {
    sum += Number(v);
    }
}

console.log(sum);

let count = 0;
do { 
    console.log(count);
    count++;
    
} while (count < 10);

console.log(count);



let pass;
do {
    pass = prompt('enter a password');
    if (pass === '<PASSWORD>') {
        break;
    } else {
        console.log('wrong password');
    }
} while (true);

console.log(pass);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = [1, 2, 3, 4 ];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

