console.log("A");
setTimeout(()=>{        // setTimeout is a Macrotask
    console.log("B");
},0);
Promise.resolve()       // Promise is a Microtask
.then(()=>{
    console.log("C");
});
console.log("D");