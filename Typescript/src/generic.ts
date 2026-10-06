//Without Generic
function identifystring(value:string){
    console.log(value);
}
console.log(identifystring("Hello World!"));

function identifynumber(value:number){
    console.log(value);
}
console.log(identifynumber(42));

function identifyboolean(value:boolean){
    console.log(value);
}
console.log(identifyboolean(true));

//With Generic
function identity<T>(value:T):T{
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

function getarray<T>(items:T[]):T{
    return items[0];
}
const fruits = getarray<string>(["Apple", "Banana", "Orange"]);
const num = getarray<number>([1, 2, 3, 4, 5]);
console.log(fruits);
console.log(num);

//Generic Constraints
function printl<T extends{length:number}>(value:T):number{
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

function pair<T, U>(first:T, second:U):[T,U]{
    return [first, second];
}
console.log(pair("Hello", 42));
const resulttype = pair("Hello", 42);
console.log(typeof resulttype[0]);
console.log(typeof resulttype[1]);

// Another example

type Useres = {
    id:number;
    name:string;
}
type Apiresponse<T,U> = {
    data?:T;
    error?:U;
}
type UserResponse = Apiresponse<Useres, string>;
/*type UserResponse = {
    data?:Useres;
    error?:string;
}*/

const userResponse:UserResponse = {
    data:{
        id:1,
        name:"John Doe"
    },
}
const userResError:UserResponse = {
    error:"User not found"
}
console.log(userResponse);
console.log(userResError);

// Generic interface example

interface ApiResponse<T,U>{
    data?:T;
    error?:U;
}
interface Users{
    name:string;
    age:number;
}
interface UserRes extends ApiResponse<Users, string>{}

const userRespons:UserRes = {
    data:{
        name:"John Doe",   
        age:30
    }
}
const userResponsError:UserRes = {
    error:"User not found"
}
console.log(userRespons);
console.log(userResponsError);