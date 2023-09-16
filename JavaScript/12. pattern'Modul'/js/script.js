'use srict';

// https://habr.com/ru/company/ruvds/blog/419997/

// 1
const number = 1;

// Анонимная самовызывающаяся функция
(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);



const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };  

    return {
        sayHello: privat
    };
}());

user.sayHello();