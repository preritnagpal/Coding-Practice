function multiply(factor:number){
    return function(num:number):number{
        return factor*num;
    }
}
const double = multiply(5);
console.log(double(2));

// Example 2 

function outer(a:number){
    return function(b:number):number{
        return a+b;
    }
}
const inner = outer(10);
console.log(inner(5));



