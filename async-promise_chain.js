// the following missed the reject function and just consider the resolve case

// Results: after 1 second, it print out 1,2,4 at the same time
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); 
}).then((result) => { 
    console.log(result); 
    return result * 2;
}).then(function(result) { 
    console.log(result); 
    return result * 2;
}).then(function(result) {
    console.log(result); 
});


// Results: after 1 second it print 1; the next second it print 2; the next second it print 4
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    console.log(result); 
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function(result) { 
    console.log(result); 
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function(result) {
    console.log(result); 
});

// the above 2 promise will virutally run at the same time.
// therefore after 1 second the results give 1,2,4,1 immediately
// then next second give 2
// and the next second give 4