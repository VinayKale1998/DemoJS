let num1 = true;
let num2 = true;

let num3 = num1+num2
//console.log(num3)// here we got 2 when we added two trues, as discussed earlier 
// true will be converted to a truthy number value, and the first in line is 1, hence 1+1


num1+=true;// shorthand operator
//console.log(num1)

let a = 1;
let b =1;
a+= b++;// preincrement first assigns and then increases, no use in this statement 
console.log(a,b)

a+=++b;// post increment first increases and then assigns, should get 3
console.log(a,b)

