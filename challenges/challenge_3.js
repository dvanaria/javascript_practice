// Give an example of a closure
//
// A closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding state (the lexical environment). In other 
// words, a closure gives you access to an outer function’s scope from an inner 
// function. In JavaScript, closures are created every time a function is 
// created, at function creation time.




function adder(x) {

    return function(y) {
        return x + y;
    }

}



// When I call adder(), I get a function back

let m = adder(5);
let i = adder(3);

// Not just a function, but a closure (it maintains its reference to x!)

console.log("Here is 5 + 12: " + m(12));

console.log("Here is 3 + 4: " + i(4));



// Here's another example

function adder_b(x) {

    let z = 50;

    return function(y) {
        return x + y + z;
    }

}


m = adder_b(5);
i = adder_b(3);
console.log("Here is 5 + 12 + 50: " + m(12));
console.log("Here is 3 + 4 + 50: " + i(4));



// In JavaScript, closures are the primary mechanism used to enable data 
// privacy. When you use closures for data privacy, the enclosed 
// variables are only in scope within the containing (outer) function.

function gate_keeper() {

    let day = 14;
    let year = 2020;

    return function(x) {

        if(x === 1) {
            return day;
        }
        else {
            return year;
        }
    };
}

let t = gate_keeper();
console.log("Day is: " + t(1));
console.log("Year is: " + t(2));

