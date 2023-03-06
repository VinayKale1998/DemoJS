    const verifyCard =require("../DemoJS/verifyCard")
    
    function  cardData()
    {
        //read card data from inputs 
        console.log("card details received");
        const card="4591 1500 5883 8929"
        verifyCard.verify(card,deductMoney);
  

    }

    function deductMoney(card,amount)
    {
        //if(!card||!amount)// using if and not operator just to make use of the arguments passed.
        console.log("Amount deducted");


    }
    
    cardData();

   
    