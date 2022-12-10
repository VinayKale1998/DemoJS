

function callDB()
{


    setTimeout(()=>{console.log("killed Aswathi");
  print(50)},4000);



}

let print= function(data)
{
    console.log(data);
}
let result = callDB();//asynchronous task



let s="sfs"
console.log(s.toString)

console.log()
 
console.log(!true)

let sum =function(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
console.log(sum(1)(2)("a"));;//6

let a= [1,3,4,{ab:3}]
let b =[...a,1,2,3]
console.log(b.join())

console.log(a[3].ab);

function createDemand()
{
    console.log("The number of prospect customers under the age ")
}