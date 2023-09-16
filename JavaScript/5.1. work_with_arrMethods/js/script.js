'use srict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
function showGoodFilms(arr) {
    let goodFilms = arr.filter(item => item.rating >= 8);
    return goodFilms;
}
showGoodFilms(films);

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.
function showListOfFilms(arr) {
    let listOfFilms = arr.map(item => Object.entries(item))
    .map(item => item.filter(name => name[0] === 'name')
    .map(item => item[1]))
    .map(item => item.reduce((sum, current) => `${sum}, ${current}`))
    .reduce((sum, current) => `${sum}, ${current}`);
    return listOfFilms;
}
showListOfFilms(films);

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.
function setFilmsIds(arr) {
    return arr.map((item, i) => {
        item.id = i;
        return item;
    });
}
setFilmsIds(films);

const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)
function checkFilms(arr) { 
    let check = arr.every(film => film.id || film.id === 0);
    return check;
}
checkFilms(tranformedArray);