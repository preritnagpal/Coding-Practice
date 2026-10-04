"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array Destructing
let numbers = [10, 20, 30];
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);
let obj = {
    name: "Prerit",
    age: 24
};
let { name, age } = obj;
console.log(name);
console.log(age);
// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(...arr1, ...arr2);
let spr = {
    name: "Prerit"
};
let updated = {
    ...spr,
    age: 24
};
console.log(updated);
// Rest Operator
let num = [10, 20, 30, 40, 50];
let [first, second, ...rest] = num;
console.log(first);
console.log(second);
console.log(rest);
let use = {
    name2: "Prerit",
    age: 24,
    city: "Bareilly"
};
let { name2, ...rest2 } = use;
console.log(name2);
console.log(rest2);
