// console.log('hi there!');
// const message = require('./myscript.js');

// console.log(message);

// console.log(arguments);

require('./myscript.js');

console.log(require.cache);

// Node Debugging

// node inspect file.js

// Execution stops each line of code and shows a debug prompt
// Options for the prompt

// 'c' -> continue execution until program ends or next debugger statement is reached
// 'n' -> run the next line of code
// 's' -> step in to a function
// 'o' -> step out of the current function
// 'repl' -> start up an execution enviroment where the difference variables in the
// program can be directly referenced

// CTRL + C will exit the debugger

// node --inspect-brk file.js

// Debugger instance available at 'chrome:/inspect'
// Use like a regular browser debugger
