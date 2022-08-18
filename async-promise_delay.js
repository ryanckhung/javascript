let isP1Success = true;
let isP2Success = true;

// ------------ IF REJECT IS ADDED; THEN IT MUST HAVE A .catch() CHAIN ------------ //
// because reject is a call back function which must be supply in the .catch() chain//
const p1 = new Promise((resolve, reject) => {   
    try {
        if(isP1Success){
            setTimeout(() => resolve("P1 is done."), 5000);  
        }else{
            throw new Error("P1 Error")
        }
    } catch (error) {
        reject('P1 is rejected');  
    }
})


const p2 = new Promise((resolve, reject) => {  
    try {
        if(isP2Success){
            setTimeout(() => resolve("P2 is done."), 2000);  
        }else{
            throw new Error("P2 Error")
        }
    } catch (error) {
        reject('P2 is rejected');  
    }
})

//======================================================================= //
// error will introduce if catch is not implement
// .catch() is implmented to provide the call back function
// p1.then((value)=>{console.log(value)}).catch((err)=>{console.log(err)})
// p2.then((value)=>{console.log(value)}).catch((err)=>{console.log(err)})


// Results
// Input:   let isP1Success = false;
//          let isP2Success = false;
// Output:  P1 is rejected (immediately)
//          P2 is rejected (immediately)

// Results
// Input:   let isP1Success = true;
//          let isP2Success = true;
// Output:  P2 is done.     (after 2 seconds)
//          P1 is done.     (after 3 seconds; include the previous 2 seconds; require 5 seconds)


//======================================================================= //
// catch must be supply to provide the call back function for the p1 and p2

myAsyncFct = async ()=>{
    try{
        let x = await p1;
        console.log(x);
    }catch(err){
        console.log(err);
    }

    try{
        let x = await p2;
        console.log(x);
    }catch(err){
        console.log(err);
    }
}
myAsyncFct();

// Results
// Input:   let isP1Success = false;
//          let isP2Success = false;
// Output:  P1 is rejected (immediately)
//          P2 is rejected (immediately)

// Results
// Input:   let isP1Success = true;
//          let isP2Success = true;
// Output:  P1 is done.     (after 5 seconds)
//          P2 is done.     (immediately after P1; actually it take 2 seconds when the function is executed)



