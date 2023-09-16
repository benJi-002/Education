'use srict';

// Конструкция try...catch пытается выполнить инструкции в блоке try, и, в случае ошибки, выполняет блок catch.

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('result');
// } catch(error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {

// }

// если мы войдем в блок кода catch, то код всё раавно продолжит выполняться

// console.log('Stil normal');



try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('normal');