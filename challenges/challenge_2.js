// Filename: challenge_2.js
// Filepath: /darron/compsci/sandbox/github_hosted_projects/javascript_practice
// Last Modified: Fri Apr 02, 2021  10:43AM
// File Contents: JavaScript source code to solve whiteboard problem

/* JavaScript Challenge 2:
 *
 *     What will the output of the following code be?
 *     Try to figure it out before running the code.
 *
 */


function my_function(x) {

    console.log(typeof x);
    console.log(typeof z);

    return x + z;

    var z = 12;

}

console.log("Adding 12 to 5: " + my_function(5));



/* The solution:
 *
 * The output is the following:
 *
 *     number
 *     undefined
 *     Adding 12 to 5: NaN
 *
 * Why? What's going on here?
 *
 *     Variable DECLARATION vs. INITIALIZING vs. ASSIGNMENT
 *
 *     1. The variable z gets hoisted to the top of the function
 *     block. However, only the DECLARATION gets hoisted, not the ASSIGNMENT.
 *
 *     2. So the ASSIGNMENT of z is INITIALIZED to 'undefined', as is any var that
 *     is declared without initializing.
 *
 *     3. Now, the 'x + z' statement gets cast to a NaN datatype, because that's
 *     what JavaScript does when trying to add a 'number' datatype to an
 *     'undefined' datatype.
 *
 *     Here's more info on NaN:
 *
 *         "NaN is a property of the global object. In other words, it is a 
 *          variable in global scope."
 *
 *         So its used as a return value when JavaScript encounters certain
 *         unmanageable situations:
 *
 *             1. Number cannot be parsed (e.g. parseInt("blabla") or 
 *                Number(undefined))
 *
 *             2. Math operation where the result is not a real number (e.g.
 *                Math.sqrt(-1))
 *
 *             3. Operand of an argument is NaN (e.g. 7 ** NaN)
 *
 *             4. Indeterminate form (e.g. 0 * Infinity, or undefined + 
 *                undefined)
 *
 *             5. Any operation that involves a string and is not an addition 
 *                operation (e.g. "foo" / 3)
 * 
 * * /

