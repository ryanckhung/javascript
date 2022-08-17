// ================================================================= //
// Function short cut
// ================================================================= //

var x = x => x+1
console.log(x(10))

var x = (a,b) => {return a+b}
console.log(x(1,2))

// Results
// 11
// 3

// ================================================================= //
// .on = addEventListener
// base on the emiited event and run the callback (inside the .on())
// https://nodejs.org/api/events.html#emitteroneventname-listener
// ================================================================= //

const EventEmitter = require('node:events');
const myEmitter = new EventEmitter();

myEmitter.on('some_event', () => {
  console.log('some event occurred!');
});
myEmitter.emit('some_event');

myEmitter.on('event_with_a_b', (a, b) => {
    console.log(a+b);
});
myEmitter.emit('event_with_a_b', 'a1', 'b2');

myEmitter.on('error', (err) => {
    console.log(err.message)
    console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('oh whoops!'));

// Results
// some event occurred!
// a1b2
// oh whoops!
// whoops! there was an error

// ================================================================= //
// ================================================================= //
