const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => "$" + String(price);

/* функция может принять в себя неограниченное количество других функций */
const pipe = (...fns) => (x) => fns.reduce((curr, fn) => fn(curr), x);
const compose = (...fns) => (x) => fns.reduceRight((curr, fn) => fn(curr), x);

// в reduce() функции будут выполняться слева направо
const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix); 
// в reduceRight() функции будут выполнятся справа налево
const discountCompose = compose(
    addPrefix,
    normalizePrice,
    divide100,
    multiply20
);

console.log(discountPipe(200)); // '$40.00'
console.log(discountCompose(200)); // '$40.00'



/* функция может принять в себя неограниченное количество других функций и аргументов */
const composeWithArgs = (...fns) => (...args) => fns.reduceRight((curr, fn) => fn(curr(...args)));

const add1 = function(a) { 
    return a + 1; 
};
const addAll3 = function(a, b, c) {
    return a + b + c; 
};
console.log(composeWithArgs(add1, addAll3)(1, 2, 3));