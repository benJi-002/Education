'use srict';

//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
    return name.length < 5; 
});

console.log(shortNames);


// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const answers = ['IvAn', 'AnnA', 'Hello'];

const result1 = answers.map(item => {
    return item.toLowerCase();
});

// будет равно

const result2 = answers.map(item => item.toLowerCase());

console.log(result1);
console.log(result2);

// либо изменяем тот же массив (но так лучше не делать)
let answers2 = ['IvAn', 'AnnA', 'Hello'];
answers2 = answers2.map(item => item.toLowerCase());

console.log(answers2);



// Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

const some = [4, 'qwq', 'sdgsreg'];

console.log(some.some(item => typeof(item) === 'number')); // true

console.log(some.every(item => typeof(item) === 'number')); // false



// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

const arr = [4, 5, 1, 3, 2, 6];

const res = arr.reduce((sum, current) => sum + current, 3); // через запятую после описания ф-ции можно передать начальное значение sum
console.log(res);


const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);



// ПРИМЕР

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr);


