const Middleware = require("./mwm.js");
const Maths = require("./calculator.js")

const calculator = new Maths()
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
    req.a = req.a * req.a * req.a;
    req.b = req.b * req.b * req.b;
    console.log('cub a: ' + req.a)
    console.log('cub b: ' + req.b)
    next();
  });

// Divisió entre els operands inicials
mwm.use((req, next) => {
    req.a = req.a / 2;
    req.b = req.b / 2;
    console.log('divisió a: ' + req.a)
    console.log('divisió b: ' + req.b)
    next();
  });

console.log('resultat suma: ' + mwm.sum({a: 2, b: 4}));
console.log('resultat resta: ' + mwm.sub({a: 3, b: 6}));
console.log('resultat multiplicació: ' + mwm.multiply({a: 5, b: 10}));

/*
 L'exercici està bé, però als middlewares estàs barrejant req.a amb a (una variable externa que no hauria d'exisitr). 
 I el tercer middleware ha de fer la divisio entre 2, no entre si mateix!
*/
