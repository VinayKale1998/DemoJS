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

    )



}

function deductMoney()
{
    //if(!card||!amount)// using if and not operator just to make use of the arguments passed.
    console.log("Amount deducted");


}

cardData();
