"use strict";
const user1 = {
    iid: 1,
    name: "John Doe",
    email: "john@gmail.com"
};
function getValue(user, key) {
    return user[key];
}
console.log(getValue(user1, "iid"));
console.log(getValue(user1, "name"));
console.log(getValue(user1, "email"));
