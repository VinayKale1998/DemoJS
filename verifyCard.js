module.exports.verify= function(card, cb)
{
    console.log( "card has been verified");
    for(i=0;i<2;i++)
{
    cb();
}
  
}
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


 // display the current time
 let dateTime= new Date();

 let time = dateTime.toLocaleTimeString();
 console.log(time);

 let str= new String("object")
 let str1="primitive"

 console.log(str instanceof Object);//true
 console.log(str1 instanceof Object);//false

 console.log(typeof str)// object
 console.log(typeof str1)// string


