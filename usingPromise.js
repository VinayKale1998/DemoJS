const verifyCard =require("../DemoJS/verifyCard")
    
function  cardData()
{
    //read card data from inputs 
    console.log("card details received");
    const card="4591 1500 5883 8929"
    const promise = verifyCard.verify(card);
    console.log(promise);// how do I call the deductMoney after promise ran it's course for checking whatever it is meant o
    // using "then" function
    //or using async await
    promise.then(
        //exec when promise is resolved
        (result)=>{
            console.log(result);
            deductMoney();
        },
        // exec when promise is rejected
        (err)=>{
            console.log(err);
        }

    ).catch(err=>{
        console.log("error from catch")
        console.log(err);
    });// this catch can handle errors from the above resolution and  also from  the deductMoney() function 
    }



cardData();
function deductMoney()
{

    //throw new Error("error here will not be handled by promise.then error block  present inside then")
    //if(!card||!amount)// using if and not operator just to make use of the arguments passed.
    console.log("Amount deducted");


}


