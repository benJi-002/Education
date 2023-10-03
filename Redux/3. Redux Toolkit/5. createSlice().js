// Обычно создаётся в папке с тем компонентом, к какому принадлежит стейт (в данном случае герои)
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    // Пространство имён (название среза)
    name: 'heroes',
    // Начальный стейт
    initialState,
    // Редюсеры и экшены. Эта часть заменяет собой создание и редюсеров, и экшенов. Если бы были файлы, где мы создавали отдельно редюсеры и экшены, то их можно было бы удалить, так как теперь весь их функционал содержится в этой файле внутри createSlice(). НУЖНО НЕ ЗАБЫВАТЬ ИМПОРТИРОВАТЬ ЭКШЕНЫ И РЕДЮСЕР ИМЕННО ИЗ ЭТОГО ФАЙЛА ИМЕННО ТУДА, ГДЕ ОНИ ИСПОЛЬЗУЮТСЯ
    //Работают всё те же принципы мутабельности
    reducers: {
        heroesFetching: state => { 
            state.heroesLoadingStatus = 'loading'; 
        },
        heroesFetched : (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError : state => { 
            state.heroesLoadingStatus = 'error'; 
        },
        heroCreated : (state, action) => {
            state.heroes.push(action.payload);
        },
        heroDeleted : (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        }
    }
});

// Деструктурируем и вытягиваем экшены с редюсером
const {actions, reducer} = heroesSlice;

// По дефолту экспортируем редюсер
export default reducer;

// Из экшенов деструктурируем каждый по отдельности
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;