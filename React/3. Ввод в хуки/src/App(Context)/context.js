import {createContext} from 'react';

const dataContext = createContext({ 
    // значение по умолчанию, когда Provider полностьюю отсутствует
    mail: "name@example.com",
    text: 'some text',
    forceChangeMail: () => {}
});

export default dataContext;