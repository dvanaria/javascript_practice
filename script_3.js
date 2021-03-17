// Challenge: write a function that is supplied a String, and outputs a single
// character (also a String): the character that occurs the most in the input
// string.





function build_dictionary(s, dict) {

    if(typeof s != "string") {

        console.log("error: input not a string\n");

    }
    else {

        // First set up dictionary with all letters in string
        for(var i = 0; i < s.length; i++) {
            dict[ s[i] ] = 0;
        }
    }
}

function count_characters(s, dict) {

    if(typeof s != "string") {

        console.log("error: input not a string\n");

    }
    else {

        for(var i = 0; i < s.length; i++) {
            dict[ s[i] ] += 1;
        }
    }
}


function print_dictionary(dict) {

    for(var key in dict) {
        console.log(key + " : " + dict[key]);
    }
}


function find_highest_count(dict) {

    var largest = 0;
    var target_key = '';

    for(var key in dict) {

        if(dict[key] >= largest) {

            largest = dict[key];
            target_key = key;
        }
    }

    console.log(target_key + " occurs " + largest + " times.\n");
}

function my_program() {

    // Here's how to declare a dictionary
    var dict = {};
    var my_string = "asdflkajhsdflkajshdiwuqeyrqowieuryaslkdjhfoiqwuerhaskdjlhf";

    console.log(my_string + '\n');
    build_dictionary(my_string, dict);
    count_characters(my_string, dict);
    print_dictionary(dict);
    find_highest_count(dict);
}

my_program();
