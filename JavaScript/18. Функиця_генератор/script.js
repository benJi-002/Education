'use srict';

// function* (ключевое слово function со звёздочкой) определяет функцию-генератор.Генераторы являются функциями с возможностью выхода и последующего входа. Их контекст исполнения (значения переменных) сохраняется при последующих входах.

// 1
// function* generator() {
//     yield 'A';
//     yield 'B';
//     yield 'C';
//     yield 'D';
// };

// const str = generator();

// // Чтобы вызвать следующую итерациюиспользуем встроенный метод next()
// console.log(str.next());
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next());


// 2
function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// for (let k of count(7)) {
//     console.log(k);
// }

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
