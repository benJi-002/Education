'use strict';
// EventLoop - событийный цикл
// Код в JS выполняется следуующим образом:
// Синхронный код попадает в очередь (callback queue) => далее в call satck и выполняется (циклы занимают call stack пока не выполнятся полностью)
// Асинхронный код (обработчики событий и т.д.) попадает сначала в хрнилище web apis и там ожидает выполнения => далее очередь callback queue => и в конце выполняется в  call stack


// страница будет грузиться пока не выполниться весь call stack
let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }
    alert('done');
}

count();


// console log выведется первее
// 1. потому что сначала setTimeout попадёт в Web Apis, потом только в очередь и колл стек
// 2. потому что JS автоматически подставляет 4мс вместо 0 для совместимости браузеров
setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);

// Этот приём можно использовать чтобы совершать каие-то действия сразу же после синхронного кода