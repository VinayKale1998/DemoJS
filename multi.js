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



