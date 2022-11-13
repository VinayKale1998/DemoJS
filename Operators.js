let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

//floor division
const quotient = Math.floor(13/3); // => 4 => the times 3 fits into 13  
const remainder = 13 % 3; 
console.log(quotient)

console.log(!0+1);

let j= 5>3?"success":"error"
console.log(j);//success


let a = 'hello';
a[0] = 'H';
console.log(a); // "hello"

//using the + operator 
const message1 = 'This is a long message ' + 
'that spans across multiple lines ' + 
'in the code.' 

// using the \ operator 
const message2 = 'This is a long message \
that spans across multiple lines \n in the code.'

console.log(message1);
console.log(message2)
