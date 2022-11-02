let randomint = 1299;
console.log(randomint,typeof randomint)

let convertedint = String(randomint)
console.log(convertedint, typeof convertedint)

let str = "reconnaissance";
let numint = Number(str)
console.log(numint, typeof numint)


let num = 4;
num= Boolean(num); 
console.log(num, typeof num);//True and boolean
/* all numbers are true except 0 , but, if you use "  ! " while converting(num = !num)
will become true and all other numbers become false*/



let x= parseInt("112 Vinay");
console.log(x); //112
/* converting using Number typecast operator will give NaN, that's why parseInt
was used, and even this will fail if the string starts with a non number character */