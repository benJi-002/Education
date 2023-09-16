'use srict';

// Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также предоставляет глобальный метод fetch() (en-US), который позволяет легко и логично получать ресурсы по сети асинхронно.

 // пример fetch GET запроса с ресура, имитирующего базу данных, jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // возвратит промис с выполняющимся объектом (или не объектом, достоверно не известно, что внутри response.json() на данный момент). Снова нужно вызвать .then, чтобы получить JS объект
    // в fetch упрощён метод получения JS объекта из Json
    .then(json => console.log(json)); 

// пример fetch POST запроса
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name:'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json));