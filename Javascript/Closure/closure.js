function multiply(factor){
    return function(num){
        return factor*num;
    }
}
const double = multiply(5);
console.log(double(2));

// Arrow

const multiply2 = (factor) => {
    return (num) => {
        return factor * num;
    }
}

// Arrow in one line

const multiply3 = (factor) => (num) => factor * num;

// Example 2 

function outer(a){
    return function(b){
        return a+b;
    }
}
const inner = outer(10);
console.log(inner(5));


//Counter

function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const add = counter();
add();
add();
add();

/*
const counter = () => {
  let count = 0;

  return () => {
    count++;
    console.log(count);
  };
};

const add = counter();

add(); // 1
add(); // 2
add(); // 3
*/
