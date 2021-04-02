// the 'number' datatype in javascript is interesting.
// All numbers are 64-bit floats, but integer values (whole values) are
// guaranteed to be exact.
//
// With 64-bits, you can have a maximum integer value of:
// 9,007,199,254,740,992
// That's 9 quadrillion.
//
// Bitwise numbers are also possible:

let x = 0b11111111;
console.log(x);
x = x + 1;
console.log(x);

let y = x | 0b10101010;
let z = x & 0b10101010;
let a = x ^ 0b10101010;
console.log(y);
console.log(z);
console.log(a);

let s = "1234";
console.log( Number(s) + 1234);

// Now here's some weirdness of how javascript auto-casts datatypes:

let b = false;
console.log(b);
b = Boolean("this is a string");  // any non-empty string converts to a boolean as true!
console.log(b);

b = "";
console.log(b);
b = Number(b);  // an empty string converts to a number as 0 (zero)
console.log(b);

b = null;
console.log(b);
b = Number(b);  // null converts to a number a 0 (zero)
console.log(b);


// Now here's the awesome typeof operator (not a method??)

console.log( typeof b );
let c = [1,2,3,4,5,6];
console.log( typeof c );
let d = null;
console.log( typeof d );
let e = {"key1":124, "key2":555, "key3":676}
console.log( typeof e);

console.log( typeof(e) );




