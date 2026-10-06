"use strict";
//Without Generic
function identifystring(value) {
    console.log(value);
}
console.log(identifystring("Hello World!"));
function identifynumber(value) {
    console.log(value);
}
console.log(identifynumber(42));
function identifyboolean(value) {
    console.log(value);
}
console.log(identifyboolean(true));
//With Generic
function identity(value) {
    return value;
}
console.log(identity("Hello World!"));
console.log(identity(42));
console.log(identity(true));
const resultidentity = identity("Hello World!");
console.log(resultidentity.toUpperCase());
// Without Generic
//let value:any=22;
//console.log(value.toUpperCase());
//Generic Array
function getarray(items) {
    return items[0];
}
const fruits = getarray(["Apple", "Banana", "Orange"]);
const num = getarray([1, 2, 3, 4, 5]);
console.log(fruits);
console.log(num);
//Generic Constraints
function printl(value) {
    return value.length;
}
console.log(printl("Hello, TypeScript!"));
console.log(printl([1, 2, 3, 4, 5]));
// console.log(printl(100)); Error: Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
/*interface Item{
    id:number;
}
function list<T extends Item>({item}:{item:T[]}){
    return(
        <>
        {
            item.map(item=>{
                <p key={item.id}>{item.id}</p>
            })
        }
        <>
    );
}*/
// Multiple generic types
function pair(first, second) {
    return [first, second];
}
console.log(pair("Hello", 42));
const resulttype = pair("Hello", 42);
console.log(typeof resulttype[0]);
console.log(typeof resulttype[1]);
/*type UserResponse = {
    data?:Useres;
    error?:string;
}*/
const userResponse = {
    data: {
        id: 1,
        name: "John Doe"
    },
};
const userResError = {
    error: "User not found"
};
console.log(userResponse);
console.log(userResError);
const userRespons = {
    data: {
        name: "John Doe",
        age: 30
    }
};
const userResponsError = {
    error: "User not found"
};
console.log(userRespons);
console.log(userResponsError);
