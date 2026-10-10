"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 1,
    name: "John Doe"
};
console.log(user1); // Output: { name: 'John Doe' }
const user2 = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "prerit@gmail.com"
};
console.log(user2); // Output: { id: 1, name: 'John Doe', age: 30, email: '
const user3 = {
    id: 1,
    name: "John Doe",
    age: 30
};
console.log(user3);
const reading = {
    id: 101,
    name: "Prerit"
};
const reading2 = {
    id: 101,
    name: "Prerit"
};
// reading.id=102 //Error 
reading2.name = "rahul";
console.log(reading2.name);
const picking = {
    name: "Prerit",
    age: 24
};
console.log(picking);
/*
type UserRoles = {
  admin: string;
  user: string;
  guest: string;
};
*/
const roles = {
    Admin: "Administrator",
    User: "Normal User",
    Guest: "Guest"
};
console.log(roles);
