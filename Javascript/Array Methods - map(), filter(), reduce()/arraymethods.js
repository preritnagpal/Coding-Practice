// Array Method

let arr = [10,20,30,40];

// Map() Method

let result = arr.map(e => e*2);
console.log(result);

// Filter() Method

let result2 = arr.filter(e => e>2);
console.log(result2);

// Reduce() Method

let result3 = arr.reduce((acc, curr) => acc+curr, 0);
console.log(result3);

// Array Method Pollyfills

// Map() Method

Array.prototype.mymap = function(callback){
    let result=[];
    for(let i=0; i<this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
};
let result4 = arr.mymap(e => e*4);
console.log(result4);

// Filter() Method

Array.prototype.myfilter = function(callback){
    let result=[];
    for(let i=0; i<this.length; i++){
       if((callback(this[i], i, this))){
        result.push(this[i])
       }
    }
    return result;
};
let result5 = arr.myfilter(e => e>20);
console.log(result5);

// Reduce() Method

Array.prototype.myreduce = function(callback, initial){
    let acc = initial;
    for(let i=0; i<this.length; i++){
       acc = callback(acc, this[i]);
    }
    return acc;
};
let result6 = arr.myreduce((acc,curr) => acc+curr, 0);
console.log(result6);