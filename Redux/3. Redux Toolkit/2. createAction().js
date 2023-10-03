// Обычно используется в файле index.js, который расположен в папке actions
import { createAction, nanoid } from "@reduxjs/toolkit";

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetching = createAction('HEROES_FETCHING')

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// Пейлод формируется автоматически, если есть какие-то данные
export const heroesFetched = createAction('HEROES_FETCHED')


// Если передаются в action не данные а строка, то можно сформировать пейлод в createAction вручную
const addTodo = createAction('todos/add', function prepare(text: string) {
    return {
      payload: {
        text,
        id: nanoid(), // встроенный инструмент для формирования id
        createdAt: new Date().toISOString(),
      },
    }
  })
  
  console.log(addTodo('Write more docs'))
  /**
   * {
   *   type: 'todos/add',
   *   payload: {
   *     text: 'Write more docs',
   *     id: '4AJvwMSWEHCchcWYga3dj',
   *     createdAt: '2019-10-03T07:53:36.581Z'
   *   }
   * }
   **/


//Формирование экшенов без тулкита

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }
// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }
// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
// export const heroCreated = (hero) => {
//     return {
//         type: 'HERO_CREATED',
//         payload: hero
//     }
// }
// export const heroDeleted = (id) => {
//     return {
//         type: 'HERO_DELETED',
//         payload: id
//     }
// }
