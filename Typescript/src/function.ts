function add(a:number, b:number):number{
    return a + b;
}
console.log(add(5, 10));

interface UserProps{
    name: string;
    age: number;
}
function createUser(user:UserProps){
    return `Name: ${user.name}, Age: ${user.age}`;
}
const user = createUser({name: "John", age: 30});
console.log(user);