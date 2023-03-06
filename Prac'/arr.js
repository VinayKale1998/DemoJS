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

 //map()  method, creates a new array from calling a function once for every array element
let ages = [4, 9, 16, 25, 36, 49];

const ages_sqrt = ages.map(Math.sqrt)
console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7]

//indexOf()// gives the index of the passed element

console.log(ages.indexOf(16));//2

console.log(ages.indexOf("dick"))//-1 as the element is  not present

//findIndex() //gives the index of the first value which passes the given filter method
console.log(ages.findIndex(test) )//2

//find() returns the value of the first value which passes the test
console.log(ages.find(test));//16
function test(number)
{
    return number>10;
}

//In JavaScript, an array is an object. And, the indices of arrays are objects keys.

//Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. For example,

let arr = ['h', 'e']; 
let arr1 = arr; 
arr1.push('l'); console.log(arr); // ["h", "e", "l"] 
console.log(arr1); // ["h", "e", "l"]

// how can we store named keys in an array?

let arr2 = ['h', 'e']; 
arr2.name = 'John'; 
console.log(arr2); // ["h", "e"] 
console.log(arr2.name); // "John" 
console.log(arr2['name']); // "John"

//sort() method
// sorting numbers
let random =[1,10,-99,90,56]

console.log(random.sort());//[ -99, 1, 10, 56, 90 ] sorted in ascending order

//sorting strings

let random2=['abstract','zen','genome','1','0',"2demo"]

console.log(random2.sort());
//[ '0', '1', '2demo', 'abstract', 'genome', 'zen' ] string with number literals will be given first pref.
//string with alphabets will be sorted in alphabetical order 
//strings which start with number character will be treated as number for sorting

const a = [1, 2, 3];
const doubled = a.map(num => {
  return num * 2;
});
console.log(doubled)



const tripled=a.map(num2=>{return num2*3})
console.log(tripled)

let arr4 = ['h', 'e'];
arr4.name = 'John';

console.log(arr4); // ["h", "e"]
console.log(arr4.name); // "John"
console.log(arr4['name']); // "John"

console.log(arr4)
console.log(arr4.length)

let sli=[0,1,2,3,4];
console.log(sli.slice(3))// [3,4] from index to the end.
console.log(sli.slice(0,3))// [0,1,2] first index will be included but the last index\

// at position 2 add two items
sli.splice(2,0,"1","2")
console.log(sli);

//At position 2, remove 2 items
sli.splice(2,2);
console.log(sli)//[ 0, 1, 2, 3, 4 ]
  

/*index	Required.
The position to add/remove items.
Negative value defines the position from the end of the array.
howmany	Optional.
Number of items to be removed.
item1, ..., itemX	Optional.
New elements(s) to be added.*/

let studentsData = [['Jack', 24], ['Sara', 23],];
// removing 1 index array item 
studentsData.splice(1,1); 
//console.log(studentsData); // [["Jack", 24]]


let in4 =[1,4,3];
in4.sort();
console.log(in4);

var arr5 =[7,6,5,4,0];
console.log(arr5.reverse().join())
var rev= arr5.reverse();
console.log(rev);

const ob1={
  f:1,f1:3,f:4
}
console.log(ob1.toString);
console.log(ob1.f2 !== undefined);


console.log(ob1)
let a2 =10;
console.log(`demo${a2}`);

class demo{
  add()
  {
    console.log("Inside Class")
  }

  add()
}


 

