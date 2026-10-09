"use strict";
function getUserInfo(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`User Department: ${user.depart}`);
    console.log(`User Email: ${user.email}`);
    console.log(`User Mobile: ${user.mobile ?? "N/A"}`);
}
getUserInfo({ id: 101, depart: "BCA", email: "prerit@gmail.com" });
getUserInfo({ id: "A101", depart: "MCA", email: "prerit@gmail.com" });
