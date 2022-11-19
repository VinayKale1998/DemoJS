let in1= [1,3,5]
let in2=[2,4,6]

let tot1=[in1,in2]
console.log(tot1)//[ [ 1, 3, 5 ], [ 2, 4, 6 ] ]
console.log(tot1[0])//[ 1, 3, 5 ]
console.log(tot1[1][0])//2

let in3=[1,2,3,4]
in3[3]=5;
console.log(in3)

//iteration
let data=[1,3,4]
data.forEach(e => {
    console.log(e)})

    //iteratin over a multidimensional array   using for each
tot1.forEach(outer=>{
    outer.forEach(inner => {console.log(inner)})});


    //You can also use the for...of loop to iterate over the multidimensional array. For example,

    for(let i of tot1){
        for(let j of i)
        {
            console.log(j)
        }
    }

//sum of array elements

let numbers =[1,3,4,6,7]
let sum =0;
for (let number of numbers)
{
sum+=number
}
console.log(sum);

//using reduce() method of an array

const sum2=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+=currentValue;
},0);

console.log(sum2);

let nums=[1,2,3,4]

//reduce() methods takes two arguments, 1. callback function 2. Initial Value

const sum3= nums.reduce((accumulator,currentValue)=>
{
 return accumulator+=currentValue;
},0)
console.log(sum3)


const arrayOfNumbers = [1, 2, 3, 4]; 
arrayOfNumbers.reduce((accumulator1, currentValue, index, array) => array[index] = array[index] * 2,0);

console.log(arrayOfNumbers)