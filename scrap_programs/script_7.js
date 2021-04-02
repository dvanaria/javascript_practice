// Closures are a way a language bundles together a function with references to
// variables outside of its own scope (?)
// 
// Closures are useful because they let you associate data with the functions
// that operate on that data. In this way, closures are related to classes.
//
// In computer science, a closure is a function that has an environment of its 
// own. In this environment, there is at least one bound variable (a name that 
// has a value, such as a number). The closure's environment keeps the bound 
// variables in memory between uses of the closure.
//
// The following code is just to understand the concept of closures "more
// better".




function makeCounter () {
  
    var count = 0;

    return function () {
     
        count += 1;
        return count;
    }

}

var x = makeCounter();

console.log(x()); // returns 1
console.log(x()); // returns 2
console.log(x()); // returns 3
