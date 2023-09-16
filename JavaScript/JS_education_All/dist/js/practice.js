'use strict';

/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ */

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = '50';

// switch (num) {
//     case '49':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('Я сыт!');
// } else {
//     console.log('Я голоден!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(1 && 'dsjhfjs');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим!');
// }


// let johhnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johhnReport || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим!');
// }


/* ЦИКЛЫ */

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }


// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j); 
//     }
// }

/* ПИРАМИДКА ИЗ ЗВЁЗДОЧЕК */ 

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n'
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) {
//                 break first;
//             }    
//             console.log(`Third level: ${k}`); 
//         } 
//     }
// }

/* ЁЛОЧКА ИЗ ЗВЕЗДОЧЕК */
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);


/* ФУНКЦИИ */
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hello world");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//     console.log("Hello");
// };

// logger();

// const  calc = (a, b) => { 
//     console.log('1');
//     return a + b;
// };

// const usdCurr = 28;
// const discount =  0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res); 



// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done')
// }

// test();


/* Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof) */
// function getMathResult(base, repeat) {
    
//     if (typeof(repeat) !== 'number' || repeat <= 0) {
//         return base;
//     }

//     let result = '';

//     for (let i = 1; i <= repeat; i++) {

//         for (let j = i; j <= i; j++) {
//             result += base * j;
//         }

//         for (let k = i; k <= i; k++) {
//             if (k !== repeat) {
//                 result += '---';
//             } else {
//                 break;
//             }
//         }
//     }
//     return result;
// }
// console.log(getMathResult(6, '8'));



/* МЕТОДЫ, СВОЙСТВА */

// const str = 'test';

// console.log(str.toUpperCase());
// console.log(str);



/* ВЫЧИСЛЕНИЕ ОБЬЁМА И ПЛОЩАДИ КУБА */

// function calculateVolumeAndArea(edge) {
//     if (typeof(edge) !== 'number' || edge <=0) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;
//     volume = edge * edge * edge;
//     area = (edge * edge) * 6;
//     return `Объём куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(23);


/* ОПРЕДЕЛЕНИЕ НОМЕРА КУПЕ */

// function getCoupeNumber(place) {
//     if (typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
//         return "Ошибка. Проверьте правильность введённого номера места";
//     } else if (place === 0 || place > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//     return Math.ceil(place / 4);
// }

// getCoupeNumber(36);


/* МИНУТЫ В ЧАСЫ + МИНУТЫ */
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(1333);


// function findMaxNumber(a, b, c, d) {
//     const arr = [];
//     arr[0] = a;
//     arr[1] = b;
//     arr[2] = c;
//     arr[3] = d;
//     if (arr.length < 4) {
//         console.log(0);
//         return 0;
//     }
//     let max = arr[0];
//     for (let i = 0; i < 4; i++) {
//         if (typeof(arr[i]) !== 'number') {
//             console.log(0);
//             return 0;
//         } else if (max < arr[i]) {
//             max = arr [i];
//         }
//     }
//     console.log(max);
//     return max;
// }

// findMaxNumber(1, 8, '6', '4');


/* ФИБОНАЧЧИ БЕЗ РЕКУРСИИ */

// function fib(arg) {
//     let row = '',
//         number = [];
//     number[0] = 0;
//     number[1] = 1;
//     if (typeof(arg) !== 'number' || arg === 0 || !Number.isInteger(arg)) {
//         console.log(row += '');
//         return row += '';
//     } else if (arg < 0) {
//         return;
//     } 
//     for (let i = 1; i <= arg; i++) {
//         number[i + 1] = number[i - 1] + number [i];
//         if (i !== arg) {
//             row += number [i - 1] + ' ';
//         } else {
//             row += number [i - 1];
//         }
//     }
//     console.log(row);
//     return row;
// }

// fib(6);


/* ПЕРЕБОР ОБЪЕКТА ЧЕРЕЗ FOR */
/////////////////////////////////////////////////////
        // for (let key in personalPlanPeter) {
        //     if (typeof(personalPlanPeter[key]) === 'object') {
        //         for (let i in personalPlanPeter[key]) {
        //             console.log(`Свойство ${i} имеет значение ${personalPlanPeter[key][i]}`);
        //         }
        //     } else {
        //         console.log(`Свойство ${key} имеет значение ${personalPlanPeter[key]}`);
        //     }
        // }
/////////////////////////////////////////////////////

/* ПРАКТИКА */

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
        
//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         console.log(str.trim());
//         return str.trim();
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = personalPlanPeter.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = 'Семья состоит из: ';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(function(item) {
//         str += `${item} `;
//     });

//     console.log(str.trim());
//     return str.trim();
// }

// showFamily(family);


// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);


// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }
//     console.log(str.split("").reverse().join(""));
//     return str.split("").reverse().join("");
// }

// reverse(someString);


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let st = '';
//     arr.length === 0 ? st = 'Нет доступных валют' : st = 'Доступные валюты:\n';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//             for (let j = i; j < arr.length - 1; j++) {
//                 arr[j] = arr [j + 1];
//             }
//             arr.pop();
//         }
//     }

    
//     arr.forEach(curr => {
//         st += `${curr}\n`;
//     });
//     console.log(st);
//     return st;
// }

// const allCurrencies = [...baseCurrencies, ...additionalCurrencies];
// availableCurr(allCurrencies, 'RUB');


/* ООП */

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const jonh = Object.create(soldier);


// const jonh = {
//     health: 100
// };

/* jonh.__proto__ = soldier; */

/* Object.setPrototypeOf(jonh, soldier); */

// console.log(jonh.armor);
// jonh.sayHello();


/* РАБОТА С ОБЪЕКТАМИ И МАССИВАМИ */

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {

//     let area = 0,
//         volume = 0;

//     data.shops.forEach(shop => {
//         area += shop.width * shop.length;
//     });

//     volume = data.height * area;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);



// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     let command = [],
//         size = 3;
//     arr.sort();

//     for (let i = 0; i < size; i++) {
//         command[i] = arr.slice((i * size), (i * size) + size);
//     }
//     command[3] = `Оставшиеся студенты: `;

//     if (arr.length > 9) {
//         command[3] += `${arr.slice(9).join(', ')}`;
//     } else {
//         command[3] += `-`;
//     }
//     return command;
// }

// sortStudentsByGroups(students);



/* ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ */
/* To string */

// 1) ОБорачивание в String();
// console.log(typeof(String(null))); 
// console.log(typeof(String(4)));

// 2) Конкатинация
// console.log(typeof(5 + '')); 

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

/* To number */

// 1) Оборачивание в Number();
// console.log(typeof(Number('4')));

// 2) Унарный плюс
// console.log(typeof(+'5'));

// let answ = +prompt('Hello', '');

// 3) Числовые методы
// console.log(typeof(parseInt('15px', 10))); //второе значение - десятичная система


//(все данные, которые мы получаем от пользователя всегда имеют тип данных - строка)

/* To boolean */

// 0, '', null, undefined, NaN;

// let switcher = null //1;

// if (switcher) {
//     console.log('Working...');
// }

// 2) Оборачивание в Boolean();
// console.log(typeof(Boolean('4')));

// 3) Двойное отрицание
// console.log(typeof(!!'4444'));


/* ЗАМЫКАНИЕ И ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ */

// let number = 5;

// function logNumber() {
//     console.log(number);
// }

// number = 6;

// logNumber();



/* ПРИМЕР РАБОТЫЗАМЫКАНИЯ ФУНКЦИИ */

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


// console.log(typeof(NaN));



/* ПРАКТИЧЕСКОЕ ЗАДАНИЕ */

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {
//             name: 'Alice', 
//             age: 22
//         }, 
//         {
//             name: 'John', 
//             age: 24
//         }
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) { 
//     let answer = ''; 
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow)); 

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// transferWaitors(restorantData);