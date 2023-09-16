'use strict';

// localStorage это свойство глобального объекта браузера (window). LocalStorage нужен только для одного — хранить определенные данные между сессиями пользователя.

// В chrome можно увидеть хранилище в панели разработчика во вкладке Application

// localStorage.setItem('number', 5); // запись данных

// localStorage.getItem('number'); //получение данных
// console.log(localStorage.getItem('number'));

// localStorage.removeItem('number'); // удаление данных

// localStorage.clear(); // полная очистка хранилища

/* Работа с формой */

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

// если в localStorage есть isChecked, то голачка остаётся омеченной
if (localStorage.getItem('isChecked')) { 
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

// если поставить галочку, то в localStorage зпишется 'isChecked': true
checkbox.addEventListener('change', () => { 
    localStorage.setItem('isChecked', true); 
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});


/* Помещение объекта в locaStorage */
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));



