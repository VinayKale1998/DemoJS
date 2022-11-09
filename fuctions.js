function oddEven(a)
{
if(a%2==0)
{
    console.log(a +" is an even number")
}
else
{
    console.log(a+" is an odd number")
}
}

const newLocal = 1989
console.log(oddEven(newLocal))

function prime(a)
{
    let m=0;
for(b=2;b<=a/2;b++)

{
if(a%b==0)
{
   m++; 

}

}
if(m>0)
{
    console.log(a+" is not a prime number")

}
else{
    console.log(a+" is  a prime number")
}
}

console.log(prime(7))
