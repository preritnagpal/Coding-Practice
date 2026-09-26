// Callback Hell Problem

setTimeout(()=>{
    console.log("Print A");
    setTimeout(()=>{
        console.log("Print B");
        setTimeout(()=>{
            console.log("Print C");
            setTimeout(()=>{
            console.log("Print D");
            },2000);
        },2000);
    },2000);
},2000);

// Callback solution Using Promise

function print(letter){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(letter);
            resolve();
        },2000);
    });
}


print("A")
.then(() => print("B"))
.then(() => print("C"))
.then(() => print("D"));

// Callback Solution Using Async/await

async function printAll(){
    await print("A");
    await print("B");
    await print("C");
    await print("D");
};
printAll();