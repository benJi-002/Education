import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Наш хук из которого тянуться запросы
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

// Возвращает ТРИ экшн криейтора: panding - стадия выполнения; fulfilled - выполнено успешно; rejected - произошла ошибка
export const fetchHeroes = createAsyncThunk(
    // Имя дейсвия в формате *имя среза*/*тип дейсвия*
    'heroes/fetchHeroes',
    // Функция ниже ВОЗВРАЩАЕТ промис, асинхроннный код (может и синхронный, но в основном используется для асинхронного)
    // В эту ф-цию аргумент приходит из dispatch(fetchHeroes()), вызов которого находится в необходимом компоненте (в этом случае в компоненте HeroesList)
    async () => {
        // В хуке useHttp используется useCallback который не будет работать в createAsyncThunk, поэтому его нужно убрать
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes")
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        // Три экшена внизу можно удалить, т.к. мы их обробатываем в extraReducers
        // heroesFetching: state => { 
        //     state.heroesLoadingStatus = 'loading'; 
        // },
        // heroesFetched : (state, action) => {
        //     state.heroesLoadingStatus = 'idle';
        //     state.heroes = action.payload;
        // },
        // heroesFetchingError : state => { 
        //     state.heroesLoadingStatus = 'error'; 
        // },
        heroCreated : (state, action) => {
            state.heroes.push(action.payload);
        },
        heroDeleted : (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        }
    },
    // Т.к. экшн криейторы fetchHeroes создаются вне слайса, то они считаются сторонними (как будто они приходят из другого слайса или другого файла), поэтому мы их обрабатываем в поле extraReducers
    extraReducers: (builder) => {
        builder
            // Ниже обработаем три экшн криейтора fetchHeroes
            .addCase(fetchHeroes.pending, state => {
                state.heroesLoadingStatus = 'loading'
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
            })
            .addCase(fetchHeroes.rejected, state => { 
                state.heroesLoadingStatus = 'error'; 
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;