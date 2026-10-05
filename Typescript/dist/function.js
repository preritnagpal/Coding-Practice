"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
function createUser(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}
const user = createUser({ name: "John", age: 30 });
console.log(user);
