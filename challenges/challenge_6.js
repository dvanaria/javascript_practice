// Find the substring "green" in the following string:
//       "Roses are red, violets are green, is that right?"
// Show the index of it's starting point. 27 b/c position starts at 0.
// Replace green with blue.


let my_string = "Roses are red, violets are green, is that right?";

let target = my_string.search("green");  // zero based indexing 
console.log(target);

let new_string = my_string.replace("green", "blue");  // returns new string
console.log(new_string);

my_string.replace("green", "blue");  // doesn't effect original string
console.log(my_string);


// The lesson here: the string object (datatype) has lots of useful methods
// for string manipulation.
