export{}

interface Person {
    id: number;
    name: string;
    age: number;
    email: string;
}

type User = Partial<Person> & {
  id: number;
};

const user1: User = {
    id: 1,
    name: "John Doe"
};
console.log(user1); // Output: { name: 'John Doe' }

// Required Utility Type

interface Person2 {
    id?: number;
    name?: string;
    age?: number;
    email?: string;
}

type User2 = Required<Person2>

const user2: User2 = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "prerit@gmail.com"
};
console.log(user2); // Output: { id: 1, name: 'John Doe', age: 30, email: '

// if need to make one optional then we can use Required and omit


type User3 = Required<Omit<Person2, "email">> & {
    email?: string;
};

const user3: User3 = {
    id: 1,
    name: "John Doe",
    age: 30
};

console.log(user3);

// Readonly Utility Type

interface read{
    id:number;
    name:string;
}
type readonlyread = Readonly<read>;

const reading: readonlyread = {
    id : 101,
    name: "Prerit"
};
// reading.id=102 //Error 
// reading.name="rahul" //Error

type readonlyread2 = Readonly<Omit<read, "name">> &{
    name:string;
};
const reading2: readonlyread2 = {
    id : 101,
    name: "Prerit"
};
// reading.id=102 //Error 
reading2.name="rahul";
console.log(reading2.name);

//Pick Utility type

interface Person4 {
    id?: number;
    name?: string;
    age?: number;
    email?: string;
}

type picked = Pick<Person4, "name" | "age">

const picking:picked ={
    name:"Prerit",
    age:24
}
console.log(picking);

// Record Utility Types

type Recording = Record<"Admin" | "User" | "Guest", string>;

/*
type UserRoles = {
  admin: string;
  user: string;
  guest: string;
};
*/
const roles: Recording = {
  Admin: "Administrator",
  User: "Normal User",
  Guest: "Guest"
};
console.log(roles);