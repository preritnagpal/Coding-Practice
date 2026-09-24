// Array Destructing

let numbers = [10,20,30];
let [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

// Object Destructing

let user = {
    name:"Prerit",
    age:24
};
let {name,age} = user;
console.log(name);
console.log(age);

// Spread operator

let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(...arr1, ...arr2);

// object

let obj = {
    name:"Prerit"
}
let updated = {
    ...obj,
    age:24
}
console.log(updated);

// Rest Operator

let num = [10,20,30,40,50];
let [first, second, ...rest] = num;
console.log(first);
console.log(second);
console.log(rest);

//object


let use = {
    name2:"Prerit",
    age:24,
    city:"Bareilly"
};
let {name2, ...rest2} = use;
console.log(name2);
console.log(rest2);