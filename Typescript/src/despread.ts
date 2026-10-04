export{}
// Array Destructing

let numbers:number[] = [10,20,30];
let [a,b,c] = numbers;
console.log(a);
console.log(b);
console.log(c);

// Object Destructing

interface des{
    name:string;
    age:number;
}

let obj:des = {
    name:"Prerit",
    age:24
};
let {name,age} = obj;
console.log(name);
console.log(age);

// Spread operator

let arr1:number[] = [1,2,3];
let arr2:number[] = [4,5,6];
console.log(...arr1, ...arr2);

// object

interface spread{
    name:string;
    age?:number;
}
let spr:spread = {
    name:"Prerit"
}
let updated:spread = {
    ...spr,
    age:24
}
console.log(updated);


// Rest Operator

let num:number[] = [10,20,30,40,50];
let [first, second, ...rest] = num;
console.log(first);
console.log(second);
console.log(rest);

// Object
interface userr{
    name2:string;
    age:number;
    city:string;
}
let use:userr = {
    name2:"Prerit",
    age:24,
    city:"Bareilly"
};
let {name2, ...rest2} = use;
console.log(name2);
console.log(rest2);