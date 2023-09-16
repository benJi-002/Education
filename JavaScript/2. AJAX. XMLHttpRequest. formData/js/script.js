'use srict';

// AJAX (Asynchronous Javascript and XML — «асинхронный JavaScript и XML») - подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером.

// Смаый первый вариант AJAX - реализуется с помощью объекта XMLHttpRequest (устаревший)

// Методы XMLHttpRequest
// .open(method, url, async, login, pass) - собирает настройки, которые помогут сделать запрос
// .setRequestHeader() - устанавливает значения HTTP заголовков. Следует вызывать только после open(), но до send()
// .send() - отправляет запрос.

// Свойства XMLHttpRequest
// status - трёхзначное число (код) ответа
// statusText - текстовое описание ответа 
// response - сырой ответ от сревера
// readyState - текущее состояние запроса

// События XMLHttpRequest
// readystatechange - статус готовности запроса в данный момент
// load - запрос полностью готов

// Объект FormData позволяет создать набор пар ключ/значение и передать их, используя XMLHttpRequest. Объект FormData предназначен для передачи данных форм, однако может быть использован для передачи пар ключ/значение независимо от форм. Данные передаются в том же формате, как и данные, передаваемые методом submit() формы, с установленной кодировкой enctype="multipart/form-data".

// При связке XMLHttpRequest + объект + FormData заголовок устанавливать не нужно !!!

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputUSD.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

/*     request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Что-то пошло не так';
        }
    }); */

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputRUB.value = (+inputUSD.value * data.current.usd).toFixed(2);
        } else {
            inputRUB.value = 'Что-то пошло не так';
        }
    });


});