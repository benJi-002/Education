'use srict';

// Объект Promise используется для отложенных и асинхронных вычислений.

// console.log('Запрос данных...');

const req = new Promise(function(resolve, reject){ // resolve - выполнилось, reject - что-то пошло не так
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product); // в случае успешного исхода
    }, 2000);
});

// resolve - функция, которая выполнится в положительном исходе. Чтобы её вызвать используем метод .then

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).finally(() => {  // метод finally выполнится независимо от положительного или отрицательного исходов
//     console.log('Finaly');
// });

// reject - функця, которая выполнится при отрицательном исходе. Чтобы её вызвать используем метод .catch

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            reject();
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
});



const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
}); // all - ожидает выполнение всех промисов

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race');
}); // race - выполнится, когда первый промис правильно отработал





// // 1
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
two().then(console.log);


// // 2
// const promisify = (item, delay) =>
//     new Promise(resolve => setTimeout(() => resolve(item), delay));
 
// const a = () => promisify('a', 100);
// const b = () => promisify('b', 5000);
// const c = () => promisify('c', 3000);
 
// async function three() {
//     const outpu1 = await a();
//     const outpu2 = await b();
//     const outpu3 = await c();
//     return `three is done: ${outpu1} ${outpu2} ${outpu3}`;
// }
 
// three().then(console.log);