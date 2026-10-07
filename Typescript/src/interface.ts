interface UserProps{
    name: string;
    age: number;
    email?: string;
}
const user2: UserProps = {
    name: "Bob",
    age: 30,
}
console.log(user2);

// without an interface 
const user3:{name: string, age: number, email?: string} = {
    name: "Charlie",
    age: 35,
}
console.log(user3);

const user4:{name: string, age: number, email?: string} = {
    name: "Charlie",
    age: 35,
    email: "prerit@gmail.com"
}
console.log(user4);

const user5:{name: string, age: number, email?: string} = {
    name: "Charlie",
    age: 35,
}
console.log(user5);

