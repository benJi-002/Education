'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if(!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if (e.name === 'SyntaxError') {
        console.error(e.message);       
    } else throw e;
}


// можно создавать специфические ошибки
// const err1 = new Error('Ошибка');
// console.log(err1.name, err1.message, err1.stack);

// const err2 = new SyntaxError('Ошибка');
// console.log(err2.name, err2.message, err2.stack);

// const err3 = new TypeError('Ошибка');
// console.log(err3.name, err3.message, err3.stack);

// const err4 = new ReferenceError('Ошибка');
// console.log(err4.name, err4.message, err4.stack);