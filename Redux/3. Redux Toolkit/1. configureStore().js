import { configureStore } from '@reduxjs/toolkit'
import heroes from '..';
import filters from '..';

// Наш кастомный middleware
const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    // Сюда передаём все редюсеры
    reducer: {heroes, filters},
    // Сюда передаём дефолтный мидлвейр (в который входит redux-thunk) и наш кастомный
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // Тут включаем devTools, принимает только булевое значение. В данном случае, проверяем является ли версия приложения продакшн или нет
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;


// Так делали до использования тулкита

// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';


// const store = createStore(
//     combineReducers({heroes, filters}), 
//     compose(
//         applyMiddleware(ReduxThunk, stringMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );