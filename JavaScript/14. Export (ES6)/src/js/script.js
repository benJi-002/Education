/* Импорт в стандарте ES6 (именованный синтаксис) */

// import {one, two} from './main';

// console.log(`${one} and ${two}`);

// также используем Webpack для сборки модулей

// при импорте можно сразу переименовать:
// import {one as first} from './main';
// console.log(first);

// Чтобы импортировать сразу всё:
// Все полученные данные назовём data
// import * as data from './main';

// теперь, чтобы обрятиться к данным в data используем обращение через точку
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();



/* Импорт в стандарте ES6 (ипорт по умолчанию) */

// import sayHi from './main';
// sayHi();



/* Импорт с использованием атрибута 'module' в теге script */

// при таком мметоде нужно не забывать прописывать .js в конце пути
import {one, two} from './main.js';
import sayHi from './main.js';

console.log(`${one} and ${two}`);
sayHi();