// Filename: challenge_1.js
// Filepath: /darron/compsci/sandbox/github_hosted_projects/javascript_practice
// Last Modified: Fri Apr 02, 2021  09:47AM
// File Contents: JavaScript source code to solve whiteboard problem

/* JavaScript Challenge 1:
 *
 *   Declare an array: [1,2,3,4,5]
 *   Add an element to the beginning of the array: "zero" 
 *   Then add an element to the end of it: "six"
 *   Iterate over the array to display its elements on separate lines.
 *
 */


let my_array = [1,2,3,4,5];

my_array.unshift("zero");
my_array.push("six");

for(let i = 0; i < my_array.length; i++) {
    console.log( my_array[i] );
}
