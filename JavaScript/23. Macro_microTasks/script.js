'use strict';
// Макрозадачи - это задачи, которые выполняются в очереди callback queue
// Микрозадачи - это задачи, которые формируются внутри .then .catch .finally либо при помощи оператра await

// Сначала отработают мАкрозадачи попавшие в стек очереди до мИкрозадач. Далее выполнится необходимый рендер страницы. Далее выполнятся скопившиеся мИкрозадачи по очереди, а далее уже оставшиеся мАкрозадачи. Далее опять рендер. Цикл повторится необходимое количество раз


setTimeout(() => {
    console.log('timeout'); // 4 макро (с попаданием в web apis)
});

Promise.resolve()
    .then(() => console.log('promise')); // 2 микро (с попаданием в web apis)

Promise.resolve()
    .then(() => console.log('promise_2')); // 3 микро (с попаданием в web apis)

console.log('code'); // 1 макро (без попадания в web apis)

/* Цикл EventLoop */
// () => {} (macrotasks)
// microtasks: then/catch/finally/await
// render
// () => {} (macrotasks)
// microtasks: then/catch/finally/await
// render
// () => {} (macrotasks)

// Чтобы вручную запустить макрозадачу до рендера после или непосредственно во время выполнения мИкрозадач используем queueMicrotask():

setTimeout(() => {
    console.log('timeout'); // 5
});

Promise.resolve()
    .then(() => console.log('promise')); // 2

queueMicrotask(() => console.log('wow')); // 3

Promise.resolve()
    .then(() => console.log('promise_2')); // 4

console.log('code'); // 1





'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);


