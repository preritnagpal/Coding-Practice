let arr = [10,[20,30,[40,50,60,[70,[80]]]]];
let result = arr.flat(1);
let result2 = arr.flat(2);
let result3 = arr.flat(Infinity);
console.log(result);
console.log(result2);
console.log(result3);

// Without flat Keyword

function flatten(arr){
    return arr.reduce((acc,curr) =>{
        if(Array.isArray(curr)){
            return acc.concat(flatten(curr));
        }
            return acc.concat(curr);
    }, []);
}
console.log(flatten(arr));