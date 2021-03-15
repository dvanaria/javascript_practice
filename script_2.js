// Functions are declared/defined using the 'function' keyword.
// This is very different than C, which just states the return type and function name.
// A function can return values and the syntax is the same as in C.
// Upon hitting a 'return' keyword, the function stops and returns that value.
// You don't have to declare a return type in the function definition.
function longest_string(string_array) {

    var longest_length = 0;
    var longest_length_index = 0;

    for(var i = 0; i < string_array.length; i++) {

        if(string_array[i].length > longest_length) {

            longest_length = string_array[i].length;
            longest_length_index = i;
        }
    }

    console.log(string_array[ longest_length_index ]);
}

const s1 = "Darron";    // strings are immutable
const s2 = "Vanaria";
const s3 = "Apple";
const s4 = "Apple";
const s5 = "I love JavaScript";
const s6 = "Here is another 1";
const s7 = "Dog";
var my_string_array = [s1, s2, s3, s4, s5, s6, s7];     // syntax for array creation
longest_string(my_string_array);
