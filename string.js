
//string primitive and String object
const a = 'hello';
const b = new String('world'); 
console.log(a); // "hello" 
console.log(b); // "hello"
console.log(typeof a); // "string" 
console.log(typeof b); // "object"

const k = new String("why not")
const l= a.concat(" ",b," fuck you")
console.log(l)

const text1 = 'hello';
const text2 = 'world';
const text3 = '     JavaScript    ';
// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2); // HELLO

const result3= result2.toLowerCase();
console.log(result3);// hello

// removing whitespace from the string
const result4 = text3.trim();
console.log(result4); // JavaScript

//converting a string to an array
const string1= "Good afternoon"
const array1= string1.split(" ");// 
const array2= string1.split("")
console.log(array1)

//string slicing
const string2 = "hippopotamus"
const string3= string2.slice(1,4)
console.log(string3) //ipp

//type conversion

//using String() function

const g = 123
const h = true
const string4= String(g);
const string5= String(h);

console.log(string4, typeof string4);
console.log(string5, typeof string5);

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(reverseEachWord);

const arr=["abc","cde"]
const str=arr.join(" ")
console.log(str)


let straight = ["a","b","c"]
console.log(straight[1])
let reverse = straight.reverse();

console.log(straight)


let len = "What's your name?"
console.log(len.length)//17


let str1= "01234"

console.log(str1.charAt(2));



function f1()
{
{
  return 50;
}
return 20;

}
let def = f1();
console.log(def)




