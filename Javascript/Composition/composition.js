const double = x => x*2;
const square = x => x*x;

const result = square(double(2));
console.log(result);

// With Composition

function compose(f,g){
    return function(x){
        return f(g(x));
    };
}
const composed = compose(square, double);
console.log(composed(5));