let isOK=true;

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