const eventEmitter = require('events').EventEmitter;

const events = new eventEmitter();

events.on('start', (name, profession) => console.log(`My name is ${name} and I am a ${profession}`));
events.on('add', (a, b) => console.log(a + b));

events.emit('start', 'Ray', 'Software');
events.emit('add', 1, 5);
