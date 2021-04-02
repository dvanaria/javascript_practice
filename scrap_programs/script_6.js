// How to capture user input using Node.js?
//
// To do this, you'll need to listen to STDIN ("standard input", i.e. your 
// keyboard), which Node.js exposes for you as process.stdin, a readable 
// stream.
//
// For now, we're going to use the built-in readline module which is a 
// wrapper around Standard I/O, suitable for taking user input from command 
// line(terminal).
//
// First, use the require() method to pull in a Node.js module called 
// 'readline'. 

const readline_module = require('readline');


// Second, setup the input/output streams by implementing the module interface
const rli = readline_module.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Third, create a callback function that will deal with user input once
// obtained
function my_func(input) {
    console.log("Captured " + input);
    rli.close();
}

// Finally, prompt for input:
rli.question("Enter input please: ", my_func);
