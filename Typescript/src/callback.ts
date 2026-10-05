export{}
const operate = (num1:number, num2:number, operation:(a:number, b:number) => number): number => operation(num1,num2);
const add = (a:number, b:number):number =>a+b;
console.log(operate(10,20,add));