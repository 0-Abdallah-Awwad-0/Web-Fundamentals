//1-prints all odd numbers from 1 to 20 to the console.
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//---------------------------------------------------------------------

//2-decreasing multiples of 3 from 100 to 0 to the console.
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//---------------------------------------------------------------------

//3-prints the sequence 
for (let i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}
//---------------------------------------------------------------------

//4-prints the sum of all numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); // Result: 5050

//---------------------------------------------------------------------

//5-prints the product of all numbers from 1 to 12(factorial).
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product); 