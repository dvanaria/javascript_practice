// Challenge: write a function that is supplied 2 strings, and reports if one is
// an anagram of the other (same letters rearranged). 
// Remove all whitespace before comparison.
//
// This demonstrates how to sort and compare strings.


function check_for_anagram(a, b) {

    var A = a.split('').sort();
    var B = b.split('').sort();

    A = A.join('');
    B = B.join('');

    if(A === B) {
        console.log("anagrams!\n");
    }
    else {
        console.log("not anagrams.\n");
    }

    console.log(A);
    console.log(B);
}



function my_program() {

    // Here's how to declare a dictionary
    var dict = {};
    var s1 = "aabbccddeeff";
    var s2 = "fdecbaefabcd";

    check_for_anagram(s1, s2);
}



my_program();
