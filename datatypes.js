//block scope   
{
    var a= 10;
    let b =30;//doesn't work as it's not called in the block 
    let c= 40;
    console.log(c);//considered as it is called in the block

    const d=40;//same case as let
    //only var can be accessed in and out of the block
}
console.log(a);


//======================


    console.log(21 == 21);
    console.log(21 == '21');
    console.log('food is love'=='food is love');
    console.log(true == "false");
    console.log(false == 0);
    console.log(null == undefined);