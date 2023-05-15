// ES5 function
const square = function (x) {
    return x*x;
}

console.log(square(8));


// Exact same above function using ES6 Arrow function.
// ES6 Arrow functions are always Anonymous.

// const squareArrow = (x) => {
//     return x * x; 
// };

// The above Arrow function only returns a single expression, can be written in a more optimised syntax as below.

//const squareArrow = (x) => x * x
//console.log(squareArrow(9))

const getFirstName = (name) => name.split(' ')[0]


console.log(getFirstName('Mike Smith'))