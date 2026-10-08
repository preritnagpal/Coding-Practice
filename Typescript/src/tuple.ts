//Normal Array

let normalarray:(string | number)[] = ["Hello", 42, "World"];
normalarray.push("TypeScript");
normalarray.push(100);
console.log(normalarray);

//Tuple Array
let tuplearray:[string, number, boolean] = ["Hello", 42, true];
console.log(tuplearray[0]); // Output: Hello
console.log(tuplearray[1]); // Output: 42
