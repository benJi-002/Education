'use strict';

/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ  */

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
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return anwser;
// }

// console.log(isOpen(openNow))

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }

// transferWaitors(restorantData);




                    /* РЕКУРСИЯ */

                    // function pow(x, n) {
                    //     if (n === 1) {
                    //         return x;
                    //     } else {
                    //         console.log( x * pow(x, n - 1));
                    //         return x * pow(x, n - 1);
                    //     }
                    // }

                    // pow (2, 50);

                    // // База рекурсии - наименьшая единица (в данном случае это число 1)
                    // // Шаг рекурсии - второй аргумент во вложенной ф-ции
                    // // Глубина рекурсии - общее количество вложенных вызовов вместе с самым первым (в данной ф-ции это n)

                    // let students = {
                    //     js: [{
                    //         name: 'John',
                    //         progress: 100
                    //     }, {
                    //         name: 'Ivan',
                    //         progress: 60
                    //     }],

                    //     html: {
                    //         basic: [{
                    //             name: 'Peter',
                    //             progress: 20
                    //         }, {
                    //             name: 'Ann',
                    //             progress: 18    
                    //         }],

                    //         pro: [{
                    //             name: 'Sam',
                    //             progress: 10
                    //         }],

                    //         semi: {
                    //             students: [{
                    //                 name: 'Test',
                    //                 progress: 100
                    //             }]
                    //         }

                    //     }
                    // };

                    // function getTotalProgressByIteration(data) {
                    //     let total = 0;
                    //     let students = 0;

                    //     for (let course of Object.values(data)) {
                    //         if (Array.isArray(course)) {
                    //             students += course.length;

                    //             for (let i = 0; i < course.length; i++) {
                    //                 total += course[i].progress;
                    //             }
                    //         } else {
                    //             for (let subCourse of Object.values(course)) {
                    //                 students += subCourse.length;

                    //                 for (let i = 0; i < subCourse.length; i++) {
                    //                     total += subCourse[i].progress;
                    //                 }
                    //             }
                    //         }
                    //     }

                    //     return total / students;
                    // }

                    // console.log(getTotalProgressByIteration(students));

                    // function getTotalProgressByRecursion(data) {
                    //     //здесь массив - база рекурсии (наименьшая единица), с него и начинаем
                    //     if (Array.isArray(data)) {  //если данные массив - то  
                    //         let total = 0; //переменная для подсчёта общего прогресса

                    //         for (let i = 0; i < data.length; i++) { //цикл перебирает все прогрессы
                    //             total += data[i].progress; //записываем в переменную с общим прогрессом
                    //         }

                    //         return [total, data.length]; //возвращаем массив с общим прогрессом и кколичеством студентов (что соответсвует длине массива)
                    //     } else { //если данные не массив - то
                    //         let total = [0, 0]; //создаём массив с двумя числами, где первое - общий прогресс, второе - кол-во студентов
                            
                    //         for (let subData of Object.values(data)) { //цикл перебирает данные полей объекта попавшего в ф-цию
                    //             const subDataArr = getTotalProgressByRecursion(subData); //отправляем подобъект рекурсивно снова в нашу ф-цию и записываем результат в переменную
                    //             total[0] += subDataArr[0]; //раскидваем полученные данные в наш массив с двумя числами
                    //             total[1] += subDataArr[1]; 
                    //         }

                    //         return total; //возвращаем массив с двумя числами
                    //     }  
                    // };

                    // const result = getTotalProgressByRecursion(students); //вызываем ф-цию и передаем в нее наш объект, записываем результат (массив с двумя числами) в переменную

                    // console.log(result[0]/result[1]); //делим значения полученного массива с результатами. Первое значение - сумма прогресса, второе количество всех учащихся. Получаем средний прогресс по курсу


                /* ФАКТОРИАЛ ЧЕРЕЗ РЕКУРСИЮ */

                // function factorial(num) {
                //     if (num <= 0) {
                //         return 1;
                //     } else if (typeof(num) !== 'number') {
                //         return 'Введите число!';
                //     } else if (!Number.isInteger(num)) {
                //         return 'Введите целое число!';
                //     } else if (num === 1) {
                //         return num;
                //     } else {
                //         return num * factorial(num -1);
                //     }
                // }

                // console.log(factorial(6));
   


/* СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ */

// touchstart - срабатывает при возникновении касания к элементу
// touchmove - если палец касается и двигается по элементу
// touchend - при отрывании пальца от элемента
// touchenter - как только палец зашел на пределы этого элемента при скролле 
// touchleave - как только палец ушёл за пределы элемента при скролле
// touchcancel - точка соприкосновния больше не регистрируется на поверхности



/* Cкрипты и время их выполнения. setTimeout и setInterval */

// const timerId = setTimeout(function(text) { //устанавливает время, через которое будет запущена функция
//     console.log(text);
// }, 2000, 'Hello'); //время в миллисекундах //один из способов передачи аргумента в функцию

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos +  "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }


// btn.addEventListener('click', myAnimation);

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId); //останавливает таймер
//     }
//     console.log('text');
//     i++;
// }
// в данном примере можно столкнуться с проблемой, когда функция (здесь logger) будет выполняться дольше таймера. В таком случае, после выполнения такой функции, таймер уже не будет запускаться (он как бы выполниться пока отрабатывает функция). Для избегания такой проблемы используется рекурсивный вызов setTimeout (setInterval)

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);



/* РАБОТА С ДАТАМИ */

// const now = new Date(2023, 5, 1, 20);

// console.log(now);

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 2;
// }

// let end = new Date();

// console.log(`Цикл отработал за ${end - start} миллисекунд`);



/* ФУНКЦИИ-КОНСТРУКТОРЫ */

// Конструкторы нужны для создания новых однотипных объектов
// Изначально в JS классов не было. Они появились в ES6 в качестве синтаксическго "сахара" - красивой обёртки для удобства использования

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new User('Ivan', 28); //мы создали объект внутри переменной ivan. Ф-ция User стала конструктором, теперь когда она вызывается с помощью new, она сохдаёт новый объект с теми свойствами, которые мы ей записали
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);



/* КОНТЕКСТ ВЫЗОВА. THIS */

// function showThis(a, b) {
//     console.log(this); //undefined
//     function sum() {
//         console.log(this); //undefined
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//         // this.hello = function() {
//         //     console.log(`Hello ${this.name}`);
//         // };
//     }
    
//     let ivan = new User('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); //привязали контекст вызова у функции к объекту user, а в качестве surname передали 'Smith'
// sayName.apply(user, ['Smith']); //аналогичная ф-ция с другим синтаксисом

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); //забиндили двойку в качестве контекста вызова в ф-цию count
// console.log(double(13)); //передали в ф-цию соunt 13 как рагумент num из связанной контекстом ф-ции double


// 1) Обычная ф-ция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind



/* КЛАССЫ */

// Классы - красивая обёртка функций конструкторов (синтаксический сахар)

// class Rectangle { //названия классов с большой буквы
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// //создадим класс, который будет наследовать поля и методы от Rectangle
// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width,  text, bgColor) {
//         super(height, width); //вызывает суперконструктор родителя, всегда на первом месте после конструктора
//         this.text = text;
//         this.bgColor =bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());//используем метод, который наследовался



// const square = new Rectangle(10, 10); //в переменной square лежит объект, у которого есть два свойства и метод
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());



/* REST ОПЕРАТОР И ПАРАМЕТРЫ ПО УМОЛЧАНИЮ */

//Rest оператор - отдельные элементы объединяет в один массив

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');



// function calcOrDouble(number, basis = 2) { //параметр по умолчанию у basis равен 2
//     console.log(number * basis);
// }

// calcOrDouble(3);

// var twoSum = function(nums, target) {
//     let i = 0,
//         arr = [];

//     if (nums.length < 2 && nums.length > Math.pow(10, 4)) {

//         return console.log('Количесво чисел в массиве должно соответсвовать условию: 2 <= nums.length <= 10^4');

//     } else if (nums[i] < Math.pow(-10, 9) && nums[i] > Math.pow(10, 9)) {

//         return console.log('Числа в массиве должны соответствовать условию: -10^9 <= nums[i] <= 10^9');

//     } else if (target < Math.pow(-10, 9) && target > Math.pow(10, 9)) {

//         return console.log('Число суммы  (target) должно соответствовать условию: -10^9 <= target <= 10^9');

//     }
//     for (i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 arr[0] = i; 
//                 arr[1] = j;
//                 return console.log(arr);
//             }
//         }
//         if (i === nums.length - 1) {
//         return console.log('Данная сумма отсутсвует среди массива');
//         }
//     }
// };

// twoSum([1, 3, 8, 1, 2, 6, 6], 12);



/* ЗАДАЧА НА РЕКУРСИЮ */

// function deepCount(a){

//     let total =  0;
//     a.forEach((elem) => {
//         if (Array.isArray(elem)) {
//             total ++;
//             const subTotal = deepCount(elem);
//             total += subTotal;
//             return total;
//         } else {
//             total ++;
//         }
//     });
//     return total;
// }

// console.log(deepCount([1, 2, [3, 4, [5]]]));