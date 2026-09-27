// Without Memoization

function square(num){
    return num*num;
}
console.log(square(5));
console.log(square(5));
console.log(square(5));
console.log(square(5));

// with Memoization

const cache = {};
function square(n){
    if(cache[n] !== undefined){
        console.log("Used from Cache result");
        return cache[n];
    }
    console.log("Calculating...");
    cache[n] = n*n;
    return cache[n];
}
console.log(square(5));
console.log(square(3));
console.log(square(5));
console.log(square(3));