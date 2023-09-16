// Чистая функция: 
// 1. Каждый раз функция возвращает одинаковый результат, когда она вызывается с тем же набором аргументов
// 2. Нет побочных эффектов (например: console.log внутри, запрос на сервер, работа с DOM деревом, изменение файлов в файловой системе, видоизменение входных данных)


// не является чистой ф-цией, т.к. при одинаковых вводных данных результат оказывается разным
const rndSum = a => Math.random() + a;

console.log(rndSum(5));
console.log(rndSum(5));
console.log(rndSum(5));

// чистая ф-ция
const sum = (a, b) => b + a;

console.log(sum(5, 10));
console.log(sum(5, 10));
console.log(sum(5, 10));


let num = 10;

const sum2 = a => num += a; 

console.log(sum2(5));
console.log(sum2(5));
console.log(sum2(5));