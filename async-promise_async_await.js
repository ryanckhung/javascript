let isOK=true;

// myResolve and myReject are the callback functions
// you can treate the myPromise as a long running function (eg. process images), 
// but you need to supply a callback functions (success, fail) after running those long running code
// Simply Speaking: It just like a long running function, but you need to supply the functions and tell what should do after those long running functions
let myPromise = new Promise(function(myResolve, myReject) {
  // The producing code (this may take some time)
  // long runnning code

  if (isOK) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

// the following 4 give the same results //
// FIRST
myPromise.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);

// SECOND
myPromise.then(
  x => console.log(x),
  y => console.log(y)
)

// THIRD
// myPromise.then(myResolve function).catch(myReject function)
myPromise.then((value)=>{console.log(value)}).catch((err)=>{console.log(err)});

// FORTH
myAsyncFct = async ()=>{
  try{
    let x = await myPromise;
    console.log(x);
  }catch(err){
    console.log(err);
  }
}
myAsyncFct();

// RESULT (let isOK=false)
// Error
// Error
// Error
// Error

// RESULT (let isOK=true)
// OK
// OK
// OK
// OK


myPromise.then((value)=>{console.log("P1 " + value); return value}).then((value)=>(console.log("P2 "+ value))).catch((err)=>{console.log("P1 " + err)});
// RESULT (let isOK=true)
// P1 OK
// P2 OK
// RESULT (let isOK=false)
// P1 Error

