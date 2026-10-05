"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operate = (num1, num2, operation) => operation(num1, num2);
const add = (a, b) => a + b;
console.log(operate(10, 20, add));
