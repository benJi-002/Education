'use srict';

// Инкапсуляция (encapsulation) - это механизм, который объединяет данные и код, манипулирующий зтими данными, а также защищает и то, и другое от внешнего вмешательства или неправильного использования. 

// Полиморфизм (polymorphism) - это свойство, которое позволяет одно и то же имя использовать для решения двух или более схожих, но технически разных задач.

// Наследование (inheritance) - это процесс, посредством которого один объект может приобретать свойства другого. Точнее, объект может наследовать основные свойства другого объекта и добавлять к ним черты, характерные только для него.

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof(age) === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     };  
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());


// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();








class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    // недоступно для вызова снаружи (только через get)
    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan.age);
console.log(ivan.surname);
ivan.say();