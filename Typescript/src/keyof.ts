interface User1{
    iid: number;
    name: string;
    email: string;
}
const user1:User1 = {
    iid: 1,
    name: "John Doe",
    email: "john@gmail.com"
}
function getValue(user:User1, key: keyof User1){
    return user[key];
}
console.log(getValue(user1, "iid"));
console.log(getValue(user1, "name"));
console.log(getValue(user1, "email"));