"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "prerit";
//console.log(name.toUpperCase()); // Error: Object is of type 'unknown'.
let text = name; // Type assertion
console.log(text.toUpperCase()); // Output: PRERIT
function getValue(value) {
    // console.log(value.toUpperCase()); // Error: Object is of type 'number | string'.
    if (typeof value === "string") {
        console.log(value.toUpperCase()); // Output: PRERIT
    }
    else {
        console.log(value.toFixed(2)); // Output: 10.00
    }
}
getValue("prerit");
getValue(10);
