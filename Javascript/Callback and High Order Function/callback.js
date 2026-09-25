function operate(num1, num2, operation){
    return operation(num1, num2);
}
function add(a,b){
    return a+b;
}
console.log(operate(5,4,add));

// Arrow

const operate2 = (num1, num2, operation) => {
    return operation(num1,num2);
}
const add2 = (a,b) => {
    return a+b;
}
console.log(operate(10,14,add2));

//Arrow in one line

const operate3 = (num1, num2, operation) => operation(num1, num2);
const add3 = (a,b) => a+b;
console.log(operate3(10,14,add3));
