// Подключить библиотеку jQuerry можно при помощи команды npm i jquery
// Далее импортируем из node_modules необходимые компоненты, либо всю библиотеку
import $ from 'jquery';

// Карту функций можно посмотреть по ссылке: https://jquery.page2page.ru/index.php5/%d0%90%d1%82%d1%80%d0%b8%d0%b1%d1%83%d1%82%d1%8b

// Обращаемся к элементу на странице (аналог document.querySelector)
// const btn = $('#btn'); 

// console.log(btn);

// Аналог window.addEventListener('DOMContentLoaded', () => {});
$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    }); 

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
});