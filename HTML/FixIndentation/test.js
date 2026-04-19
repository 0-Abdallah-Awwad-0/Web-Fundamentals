var differenceOfSums = function (n, m) {
  var num1=0;
  var num2=0;
  for (i = 1; i <= n; i++) {
    if (i % m == 0) {
       num1 = num1 + i;
    } else {
       num2 = num2 + i;
    }
  }
   return num1 - num2;
};
console.log(differenceOfSums(10,2));
