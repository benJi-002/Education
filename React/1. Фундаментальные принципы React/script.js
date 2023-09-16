// Императивное программирование — это описание того, как ты делаешь что-то, а декларативное — того, что ты делаешь.

// Императивный подход (как): Я вижу, что тот угловой столик свободен. Мы пойдём туда и сядем там.

// Декларативный подход (что): Столик для двоих, пожалуйста.

// Напишите функцию, называющуюся add, которая принимает массив и возвращает сумму всех его элементов: add([1,2,3]) -> 6

// Императивный
function add (arr) {
let result = 0
for (let i = 0; i < arr.length; i++){
  result += arr[i];
}
return result;
}

// Деклоративный
function add (arr) {
    return arr.reduce((prev, current) => prev + current, 0)
  }

// React замечателен тем, что в нём вы можете создавать декларативные пользовательские интерфейсы.
// Ещё одним преимуществом является то, что декларативный код является контекстно-независимым. Это значит, что его можно использовать в любой программе без изменений.

// 1. В своей работе Ract использует препроцессор JSX (смесь HTML и JS)
// 2. Внутри React есть алгоритм, который позволяет отслеживать какие части приложения изменились и обновить только их, а не всё приложение
// 3. Virtual DOM - вместо того, чтобы взаимодействовать с DOM напрямую, мы работаем с его легковесной копией. Мы можем вносить изменения в копию, исходя из наших потребностей, а после этого применять изменения к реальному DOM.