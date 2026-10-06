type Person1 = {
    name: string;
    age: number;
}
// Index Acess Type

type UserData =  Person1["name" | "age"];

const userData: UserData = "John Doe"; // Valid
const userData2: UserData = 30; // Valid

function getData(user: Person1["name" | "age"]) {
    console.log(user);
}
getData("prerit");

//With Destructing

function getData2({user}:{user: Person1["name" | "age"]}) {
    console.log(user);
}
getData2({user: "prerit"});
getData2({user: 30});