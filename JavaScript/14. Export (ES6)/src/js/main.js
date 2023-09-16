/* Экспорт в стандарте ES6 (именованный синтаксис) */

// 1
export let one = 1;

// 2
let two = 2;

export {two};

// 3
// export function sayHi() {
//     console.log('Hello');
// }

/* Экспорт в стандарте ES6 (экспорт по умолчанию) */

// Он может быть только один в файе экспорта 
export default function sayHi() {
    console.log('Hello');
}