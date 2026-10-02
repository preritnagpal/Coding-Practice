"use strict";
function multiply(factor) {
    return function (num) {
        return factor * num;
    };
}
const double = multiply(5);
console.log(double(2));
// Example 2 
function outer(a) {
    return function (b) {
        return a + b;
    };
}
const inner = outer(10);
console.log(inner(5));
