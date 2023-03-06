const fs= require("./demo.js");

console.log(fs.addTwoNumber(2,3));

console.log(document.getElementById("par").childNodes); 

function abc(){
    let a = document.getElementById("text1").value;
    console.log(a);
    document.getElementById("demo1").innerText="Fuck You"
    console.log("Dont click inside the text box")
}
// document.addEventListener("click",()=>{

//     alert("HI");
//     console.log("hi")
// })
setTimeout(()=>{
    
    let a = document.getElementById("demo1");
    a.innerHTML = "VINAY CHUTIYA";

},5000)




// document.addEventListener("contextmenu",()=>{
//     alert("MF don't right click");
// })

document.addEventListener("DOMContentLoaded",
function()
{console.log(document.getElementById("par").innerText);
console.log(document.getElementById("par").childNodes);
console.log(document.getElementById("par").nextElementSibling);



}

);   


function add(){
    let inputag= document.getElementById("text2");

    inputag.focus();

    setTimeout(()=>inputag.blur(),2000);


}
setTimeout(()=>{const bra  = document.querySelector("#hp");
bra.removeChild(document.getElementById("hp1"))},3000)

let yes = document.querySelector("#vas");
yes.setAttribute("type","radio");




function addlist(){
    let menu = document.getElementById("menu");
    
    for(let i=0;i<10;i++)
    {
        let li=document.createElement("li");
        li.textContent=`item${i}`;
        menu.appendChild(li);

    }
}

console.log(document.getElementById("hp2").setAttribute("style","color:aqua"));

let div1= document.getElementById("clicking");

div1.style.cssText+="background-color:aqua";
div1.style.cssText+="border:3px solid black";

div1.style.backgroundColor="red";
div1.style.border="4px solid yellow"


let button = document.querySelector("#clicking1");
 function divClick() {alert("div clicked")};
 
div1.addEventListener("click",divClick,false)

button.addEventListener("click",removeDivEvent,false);

 function removeDivEvent(){
    div1.removeEventListener("click",divClick,false)
 }
let a=-$("#clicking");
console.log(a);
$("#clicking").after("<div>added after</div>") 
$("#clicking").before("<h1 style='background-color:aqua'>Added before<h1>")
$("#clicking").append("Appended")
$("#clicking").replaceAll("#p1")
setTimeout(()=>{
    $("#clicking").remove();
},3000)

setTimeout(()=>{
    console.log(document.getElementById("input1").value);
},3000)

$("#web1").mouseenter(function(){
   // $(this).css("visibility", "collapse")
})

$(window).scroll(function()
{
    $("#web1").css("background-color","red")
})
    

