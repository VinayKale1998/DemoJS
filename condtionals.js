// program using switch statement
let a = 2;

switch (a) {

    case 10:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log( `The value is ${a}`);

// program using switch statement
let a1 = 1;

switch (a1) {
    case "1":
        a1 = 1;
        break;
    case 1:
        a1 = 'one';
        break;
    case 2:
        a1 = 'two';
        break;

    default:
        a1 = 'not found';
        break;
}
console.log(`The value is ${a1}`);


/* program for a simple calculator
let result;

// take the operator input
const operator = '/';

// take the operand input
const number1 = parseFloat(100);
const number2 = parseFloat(2);

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(result);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(result);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
*/
//In a JavaScript switch statement, cases can be grouped to share the same code.

//Example 4: switch With Multiple Case
// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log('default');
}

var foo = 5;
switch (foo) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log('default')
    // fall-through
  case 1:
    console.log('1');
    
}

var grade='C';
var result;
switch(grade) {
case'A': {
result+="10";
break;
}
case'B': {
result+=" 9";
break;
}
case'C': {
result+=" 8";
break;
}
default:
result+=" 0";
}
console.log(result);

console.log(undefined+ " 8")//8

// define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
for (let [key, value] of map) {
    console.log(key + ' - ' + value);
}

// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

//program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation

// negative number -> loop terminate
// non-numeric character -> skip iteration

let sum = 0;
let number = 0;

/*while (number >= 0) {

    // add all positive numbers
    sum += number;

    // take input from the user
    //number = parseInt(prompt('Enter a number: '));

    // continue condition
    if (isNaN(number)) {
        console.log('You entered a string.');
        number = 0; // the value of number is made 0 again
        continue;
    }

}
*/

// display the sum
console.log(`The sum is ${sum}.`);

let itemsPassed = 0;
let i, j;

top:
for (i = 0; i < itemsPassed.length; i++) {

  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(itemsPassed[i])) {
      continue top;
    }
  }

  itemsPassed++;
}

console.log(!true)

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    console.log(i); // 1, then 3, 5, 7, 9
  }

  var x=0;
for(x;x<10;x++);
console.log(x);

var size=5;
var x=5;
var size=4;
for(var j1=size;j1>=0;j1--)
{
console.log(x);
xx=x-2;
}

 y =4;

 let ar = [1,3]
 ar.name='meta'
 console.log(ar.join())
 console.log(ar.name)

 let person=
 {
    name1 :'vinay',
    age:24

 }

 console.log(person.age)
 console.log(`age of the above person on ${person["age"]}`)




let letters = new Set(["a","b","c"]);
let myIterator1 = letters.values();

// List all Values
let text1 = "";
for (let entry1 of myIterator1) {

  console.log(entry1)

}

let myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {

  console.log(entry)
}

// Create a Map 
const fruits = new Map(); 
// Set Map Values 
fruits.set("apples", 500); 
fruits.set("bananas", 300); 
fruits.set("oranges", 200);
console.log(fruits)

// json object
const jsonData = '{ "name": "John", "age": 22 }';



// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John

// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
	"reading" : true,
	"gaming" : false,
	"sport" : "football"
    },
    "class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

// JavaScript object
const jsonData1 = { "name": "John", "age": 22 };

// converting to JSON
const obj1 = JSON.stringify(jsonData);

// accessing the data
console.log(obj1); // "{"name":"John","age":22}"4


let user = {
    name: "Piyush",
    age: 24,
  };
 
  for (let key in user) {
    console.log( key );  // name, age
    //console.log( user[key] ); // Piyush, 24
  }

  const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };
  
  const data2 = JSON.stringify(settings, ['level', 'health']);
  console.log(data2);// "{"level":19, "health":90}"

  var a4 =[]; a4.unshift(5); a4.unshift(22); a4.shift(); a4.unshift(3,[4,5]); a4.shift(); a4.shift(); a4.shift();
  
  console.log(a4)
  a4.unshift(3)

  let ab =13;
  switch(ab)
  {
    case 13:
        console.log("ab was found");
        break;

        case 12:
            console.log("ab was not found")
  }
console.log(parseFloat(10/3))


function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  console.log()

  
function rectangleArea(width, height) {
    if (width < 0 || height < 0) 
      return 'You need positive integers to calculate area!';
    
    return width * height;
  }
  
console.log(rectangleArea(-1,3))

function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59
  

  const arr3=[1,2,4].map(num=> {return num+1})

  // the above code can be written in a concise way using cocise body

  //const arr3=[1,2,4].map(num=>  num+1)

  console.log(arr3.reverse().join(" "))

  // program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}


(function() {
  var foo1 = 3;
  console.log(foo1);
})();

console.log(foo1);