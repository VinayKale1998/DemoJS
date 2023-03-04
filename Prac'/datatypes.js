//block scope   
{
    var a= 10;
    let b =30;//doesn't work as it's not called in the block 
    let c= 40;
    console.log(c);//considered as it is called in the block

    const d=40;//same case as let
    //only var can be accessed in and out of the block
}
console.log(a);


//======================


    console.log(21 == 21);
    console.log(21 == '21');
    console.log('food is love'=='food is love');
     if("0")
     {
        console.log("truthy")
     }
    console.log(false == 0);
    console.log(null == undefined);

    if(null)
{
console.log("truthy")

}
else 
{
console.log("falsy");
}

console.log(5/"s")

//example of coercion
const k = '5'
const b = 5;

let c = k+b;// b will be coerced with a to form a string 
 console.log(c) // 55 

 console.log(typeof(true+true))

 ///example of conversion
let l = "123"
let m=Number(l);
console.log(m, typeof(m));
let p = "456 dem"
let g = parseInt(p);
console.log(g, typeof g);
let o =34343344n;
console.log(typeof o)

let i= 10;
console.log(i++);
console.log(--i);