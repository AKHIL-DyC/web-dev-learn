"use strict";
const a = 10;
console.log(a);
function greet(a) {
    console.log("hello" + a);
}
function sum(a, b) {
    return a + b;
}
greet("akhil");
let ans = sum(1, 2);
console.log(ans);
//tsc -b provides a js file for this
