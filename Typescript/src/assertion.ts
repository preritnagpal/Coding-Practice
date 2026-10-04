export{}

let name:unknown = "prerit";
//console.log(name.toUpperCase()); // Error: Object is of type 'unknown'.

let text = name as string; // Type assertion
console.log(text.toUpperCase()); // Output: PRERIT

function getValue(value: number | string){
    // console.log(value.toUpperCase()); // Error: Object is of type 'number | string'.


    if(typeof value === "string"){
        console.log(value.toUpperCase()); // Output: PRERIT
    }else{
        console.log(value.toFixed(2)); // Output: 10.00
    }
}
getValue("prerit");
getValue(10);