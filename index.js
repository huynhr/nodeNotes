const utility = require('./utility');
// -----------COMMON JS EXAMPLE---------------
console.log(utility);

// -----------EVENT LOOP EXAMPLE ---------------

const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  // this will be executed once the event loop is done and on the messaging queue
  setTimeout(bar, 5);
  // Promises that RESOLVE BEFORE the current function ends will be executed, then the message queue
  new Promise((resolve, reject) => {
    return resolve({ data: 'I should come immediately before bar' });
  }).then(resolve => console.log(resolve.data));
  baz();
}

foo();
/*
foo
baz
I should come immediately before bar
bar
*/