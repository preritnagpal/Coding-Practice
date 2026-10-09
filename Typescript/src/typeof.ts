const person = {
    name: "John Doe",
    age: 30
}
type Person = typeof person;
/*
type Person = {
    name: string;
    age: number;
}
 */
const personone: Person = {
    name: "Jane Doe",
    age: 25
}
console.log(personone.name);
console.log(personone["age"]);

