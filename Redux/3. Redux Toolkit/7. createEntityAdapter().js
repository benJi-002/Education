// Обычно создаётся в файле со слайсом, в данном случае это слайс heroesSlice
import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

// Создаём адаптер
const heroesAdapter = createEntityAdapter();

// Так бы выгляде адаптер, если бы нужно было указать, из какого поля ему брать id
// const heroesAdapter = createEntityAdapter({
//     selectId: heroes => heroes.name
// });

// Initial state созданный вручную до использования адаптера
// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle'
// }

// Используем внутреннюю CRUD function адаптера для создания initialState
// Теперь initialState будет иметь такую структуру:
// {ids: [], entities: {}}
// ids - массив id, которые должны быть у сущностей, отданных сервером (ВАЖНО!!! Может не работать, если не будет id. Если id в сущности лежит не в поле с ключем id, то при создании адаптера можно указать, с какого поля адаптер будет подтягивать id-шник)
// entities - объект ключей со значениями, где ключи - id из массива ids, значения - объекты с сущностями, полученными с сервера
const initialState = heroesAdapter.getInitialState({
    // Можно добавлять свои поля в дефолтный стейт
    heroesLoadingStatus: 'idle'
});

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    async () => {
        const {request} = useHttp();
        return await request("http://localhost:3001/heroes")
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated : (state, action) => {
            // С помощью CRUD functions адаптера можно совершать дейсвия со стейтом.
            // Внизу пример добавления одной сущности в стейт с помощью CRUD function адаптера
            heroesAdapter.addOne(state, action.payload);
        },
        heroDeleted : (state, action) => {
            // Внизу пример удаления одной сущности из стейта с помощью CRUD function адаптера
            // В пейлод попадает необходимый id, который и удаляется
            heroesAdapter.removeOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {
                state.heroesLoadingStatus = 'loading'
            })
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                // Внизу пример использоваия CRUD function адаптера для перезаписи всего стейта новыми данными (все старые заменяются новыми)
                heroesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchHeroes.rejected, state => { 
                state.heroesLoadingStatus = 'error'; 
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;

// Здесь мы получаем селектор из адаптера. 
// С помощью селекторов можно читать данные из стейта
// Чтобы селекторы читали данные именно из того слайса, которыц нам нужен, передаём в getSelectors функцию, в которой получаем тот слайс, который нам нужно
const {selectAll} = heroesAdapter.getSelectors(state => state.heroes);

// Чтобы упростить работу и ограничить доступ к данным UI компонента, функцию createSelector создаём в файле слайса и далее экспортруем её
export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    // Ниже запись будет равна
    // (state) => state.heroes.entities
    // Этот селектор АВТОМАТИЧЕСКИ получит и отдаст нам массив объектов с сущностями, которые лежат в стейте в поле entities
    selectAll,
    (filter, heroes) => {
        if (filter === 'all') {
            console.log('render')
            return heroes;
        } else {
            return heroes.filter(item => item.element === filter)
        }
    }
);

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;