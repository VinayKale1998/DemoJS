// function borrowing

let name1={
    firstname: "vinay",
    lastname:"kale",
    printfullname : function(){console.log(this.firstname +" "+ this.lastname)}

}

name1.printfullname();

let name2=
{
    firstname:'Aswathi',
    lastname: 'Rajesh'


}
name1.printfullname.call(name2)


 function pfn()
{
    console.log(this.firstname+" " + this.lastname)
}
pfn.call(name1)

let pfn1=function(city, state)
{
    console.log(this.firstname+" " + this.lastname+" is  from "+city +" city of  " + state)
}

/*we can just declare parameters in the function being used similar to what is shown above

now we invoke the function, note that the first argument will always be the object reference*/ 

pfn1.call(name1,"Bengaluru", "Karnataka");



//we can also use apply instead of call like below
pfn1.apply(name2,["Kannur","kerala"])

let printMyName= pfn1.bind(name1,"Jamnagar","Gujarat");// bind does not directly invoke the methond unlike call and apply
printMyName(); // will now work the same as pfn1.call(name1,"Bengaluru", "Karnataka");

console.log(printMyName)//[Function: bound pfn1]

 

//function currying

let multiply =function(x,y)
{
    console.log(x*y)
}





let mutiplyByTwo = multiply.bind(this,2)// hard coding value for x as 2 while binding 

// now call the function by passing desired y value only in the paramter
mutiplyByTwo(3); 
//can also be passed while binding during currying which cannot  be overwritten while calling
//let mutiplyByTwo = multiply.bind(this,2,3)
//mutiplyByTwo(4)// will give 6 and not 8 

let multiplyByThree = multiply.bind(this,3)

multiplyByThree(3);


