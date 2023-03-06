
 // imported in usingPromise.js, usingawaitForPromise.js and ecommerce.js
module.exports.verify= card=>
{
  const promise = new Promise((resolve, reject)=>{
    if(!card)
    reject("Card was not found");

    else{
      setTimeout(()=>{
      console.log("card verified");
      resolve(true);
      // resolve(true); //in one Promise, you cannot call multiple times, it will only accept the first one,
      //same goes for reject
    },2000);
  }


  });
  return promise;
};



  

