// print numbers from 1 to 10
for(x=1;x<=10;x++){
console.log(x);
}
// print numbers from 1 to 10 in reverse order
for(x=10;x>=1;x--){
console.log(x);
}

// Display even numbers till 20
for(k=1;k<=20;k++){
    if(k%2==0){
        console.log(k);
    }
}
// Display odd numbers till 20
for(j=1;j<=20;j++){
    if(j%2==1){
        console.log(j);
    }
}
// sum of numbers from 1 to 10
let n = 10;
let sum = n * (n + 1) / 2;
console.log(sum); 

// fizz buzz until 33
for (let i = 1; i <= 33; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } 
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  else {
    console.log(i);
  }

}