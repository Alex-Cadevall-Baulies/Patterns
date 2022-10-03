class Calculator {
    sum(a, b) {
        return a + b;
    };
    sub(a, b) {
     return a - b
    };
    multiply (a, b){
        return a * b
    }
}

const data = require('./data.json');
let a = data.number1
let b = data.number2

const calculator = new Calculator()
console.log(calculator.sum(a, b));
console.log(calculator.sub(a, b));
console.log(calculator.multiply(a, b));
