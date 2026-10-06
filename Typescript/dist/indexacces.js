"use strict";
const userData = "John Doe"; // Valid
const userData2 = 30; // Valid
function getData(user) {
    console.log(user);
}
getData("prerit");
//With Destructing
function getData2({ user }) {
    console.log(user);
}
getData2({ user: "prerit" });
getData2({ user: 30 });
