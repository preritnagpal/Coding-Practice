// Call() Method

function greet(){
    console.log(this.name);
}
const user = {name:"Prerit"};
greet.call(user);

// Apply() Method

function add(city, state){
    console.log(this.name, city, state);
}
const user2 = {name:"Prerit"};
add.apply(user2,["Bareilly", "Uttarpradesh"]);

// Bind() Method

function bindmethod(){
    console.log(this.name);
}
const user3 = {name:"Prerit"};
const fn = bindmethod.bind(user3);
fn();

// Pollyfills of this() Method
// Call() Polyfill

Function.prototype.mycall = function(obj){
    obj.fn = this;
    obj.fn();
}
const user4 = {name:"Hardik"};
greet.mycall(user4);

// Apply)() Polyfill

Function.prototype.myapply = function(obj, args){
    obj.fn = this;
    obj.fn(...args);
}
const user5 = {name:"Prerit"};
add.apply(user5,["Bareilly", "Uttarpradesh"]);

// Bind() Method

Function.prototype.mybind = function(obj){
    let fn = this;
    return function(){
        return fn.call(obj);
    }
}
const user6 = {name:"Hardik"};
const newFn = greet.mybind(user6);
newFn();
