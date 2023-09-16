'use srict';

// Существует специальный синтаксис для работы с промисами, который называется «async/await».


const postData = async (url, data) => { //async говороит функции, что внутри будет асинхронный код
    const res = await fetch(url, { // Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};