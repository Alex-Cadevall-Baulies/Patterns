const Middleware = require("./mwm.js");
const Maths = require("./calculator.js")
const data = require('./data.json');

let a = data.number1
let b = data.number2

const calculator = new Maths({a, b})
const mwm = new Middleware(calculator)

// Quadrat
mwm.use((req, next) => {
    req.a = req.a * req.a;
    req.b = req.b * req.b;
    console.log('quadrat a: ' + req.a)
    console.log('quadrat b: ' + req.b)
    next();
  });

// Cub
mwm.use((req, next) => {
    req.a = req.a * a;
    req.b = req.b * b;
    console.log('cub a: ' + req.a)
    console.log('cub b: ' + req.b)
    next();
  });

// Divisió entre els operands inicials
mwm.use((req, next) => {
    req.a = req.a / a;
    req.b = req.b / b;
    console.log('divisió a: ' + req.a)
    console.log('divisió b: ' + req.b)
    next();
  });

console.log('resultat suma: ' + mwm.sum({a, b}));
console.log('resultat resta: ' + mwm.sub({a, b}));
console.log('resultat multiplicació: ' + mwm.multiply({a, b}));
