// Reolved State 
let promise = new Promise((resolve, reject) => {
    resolve("Data Fetched Successfully");
})
promise.then((data)=>{
    console.log(data);
});

// Rejected State
let promise2 = new Promise((resolve, reject) => {
    reject("Data Loading Failed");
})
promise2.catch((error)=>{
    console.log(error);
});

// then() + catch()

function createPromise(success){
    return new Promise((resolve,reject) => {
        if(typeof success !== "boolean"){
            reject("Please Pass True or False");
        }
        if(success){
            resolve("Promise is Resolved");
        }else{
            reject("Promise is Failed");
        }
    });
}
createPromise(true)
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
.finally(()=>console.log("Promise Completed"));

// Promise Methods

// Promise.all() Method

let p1 = Promise.resolve("Admin");
let p2 = Promise.resolve("User");
let p3 = Promise.resolve("Guest");

Promise.all([p1,p2,p3])
.then((result) => console.log(result))
.catch((error) => console.log(error));

// Promise.allSettled() Method

let ps1 = Promise.resolve("Admin");
let ps2 = Promise.reject("Promise Rejected");
let ps3 = Promise.resolve("Guest");

Promise.allSettled([ps1,ps2,ps3])
.then((result) => console.log(result))
.catch((error) => console.log(error));

// Promise.all() Method

let pr1 = new Promise((resolve) => {
    setTimeout(() => resolve("API 1"),1000);
});
let pr2 = new Promise((resolve) => {
    setTimeout(() => resolve("API 2"),500);
});
let pr3 = new Promise((reject) => {
    setTimeout(() => reject("API 3 Failed"),1000);
});

Promise.race([pr1,pr2,pr3])
.then((result) => console.log(result))
.catch((error) => console.log(error));

// Promise.any() Method

let pa1 = Promise.reject("Promise Rejected from any()");
let pa2 = new Promise((resolve) => {
    setTimeout(() => resolve("API 2 Passed from any()"),500);
});
let pa3 = new Promise((resolve) => {
    setTimeout(() => resolve("API 3 Passed from any()"),1000);
});

Promise.any([pa1,pa2,pa3])
.then((result) => console.log(result))
.catch((error) => console.log(error));

// Promise Chaining

Promise.resolve(2)
.then((num) => num*2)
.then((num) => num+2)
.then((num) => num*2)
.then((result)=> console.log(result));