//Basic Currying

function add(a,b,c){
    return a+b+c;
}
console.log(add(2,4,6));

// Curried Version 

function curriedadd(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}
console.log(curriedadd(20)(40)(60));

// Arrow Curried Version

const curry = a => b => c => a+b+c;
console.log(curry(2)(4)(6));

// Infinity Currying

function inadd(a){
    return function(b){
        if(b!==undefined){
            return inadd(a+b);
        }
        return a;
    };
}
console.log(inadd(20)(40)(50)());

// Arrow Infinity Currying

const sum = a => b => b!==undefined?sum(a+b):a;
console.log(sum(2)(4)(5)());


// Generic Curring

function generic(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }
        return function(...next){
            return curried(...args, ...next);
        };
    };
}
function adding(a,b,c){
    return a+b+c;
}
const curryadd = generic(adding);
console.log(curryadd(2)(4)(6)); 
console.log(curryadd(2,4)(6));    
console.log(curryadd(2)(4,6));    
console.log(curryadd(2,4,6));    

// Infinite Curring Without a terminating call

const Sum = (a) => {
    let total = a;
    const inner = (b) => {
        total+=b;
        return inner;
    };
    inner.valueOf = () => total;
 // inner.toString = () => total;
    return inner;
};
console.log(+Sum(1)(2)(3));