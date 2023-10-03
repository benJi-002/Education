// Обычно создаётся в файле, который расположен в папке reducers
import { createReducer } from "@reduxjs/toolkit";

// Импортируем экшены
import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} from '../actions';


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

// Передаём стейт и билдер. В билдере разбираем кейсы без необходимости писать тип экшена.
// В addCaase() передаём необходимый экшн и вторым аргуентом стейт (либо стейт с объектом экшена).
// Можно напрямую мутировать стейт, так как под капотом createReducer использует библиотеку immer js, которая переделывает код и сохраняет принцип иммутабельности
// Однако, если поставить return или не обернуть функцию state в фигурные скобки, то inner js будет думать, что разработчик уже исполнил принцип иммутабельности
const heroes = createReducer(initialState, builder => {
    builder
        .addCase(heroesFetching, state => {
            state.heroesLoadingStatus = 'loading';
        })
        .addCase(heroesFetched, (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        })
        .addCase(heroesFetchingError, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addCase(heroCreated, (state, action) => {
            state.heroes.push(action.payload);
        })
        .addCase(heroDeleted, (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        })
        .addDefaultCase(() => {})
})

// Альтернативный синтаксис редюсера с createReducer
// Такой редюсер будет работать только с JS (не будет с TS)
// Аналогично верхнему варианту, если поставить return или не обернуть функцию state в фигурные скобки, то inner js будет думать, что разработчик уже исполнил принцип иммутабельности
const heroes = createReducer(initialState, {
    [heroesFetching] : state => { 
        state.heroesLoadingStatus = 'loading'; 
    },
    [heroesFetched] : (state, action) => {
        state.heroesLoadingStatus = 'idle';
        state.heroes = action.payload;
    },
    [heroesFetchingError] : state => { 
        state.heroesLoadingStatus = 'error'; 
    },
    [heroCreated] : (state, action) => {
        state.heroes.push(action.payload);
    },
    [heroDeleted] : (state, action) => {
        state.heroes = state.heroes.filter(item => item.id !== action.payload);
    }
}, [], state => state) // Последнее выражение для дефолтного поведения


// Вариант без использования тулкита
const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_CREATED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'HERO_DELETED': 
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default heroes;