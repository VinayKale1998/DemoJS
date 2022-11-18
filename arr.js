let dailyActivities = ['eat', 'sleep']; // add an element at the end 

dailyActivities.push("dream");
console.log(dailyActivities); // ['eat', 'sleep', 'dream']

dailyActivities.unshift("brush")//add an element at the beginning

console.log(dailyActivities);//[ 'brush', 'eat', 'sleep', 'dream' ]

console.log(dailyActivities.pop()) // dream // remove an element at the end and return the value    

console.log(dailyActivities.shift())//brush // remove an element at the beginnging and return the value

console.log(dailyActivities)//[ 'eat', 'sleep']

//length of an array
console.log(dailyActivities.length)


//concat - joins and returns value

let vinay =["05"];
let Ash =["26"]

console.log(vinay.concat(Ash))//[ '05', '26' ] 

console.log(vinay)//[ '05' ] // original doesnt change. assignment to new array required to s


//filter(), creates a new array using values which pass the test criteria method passed as a paramter 
let normal=[1,2,0,-1,5,true,"7"]

function filt(number)
{
    return number>0;
}
const filtered = normal.filter(filt)
console.log(filtered);//[ 1, 2, 5, true, '7' ]