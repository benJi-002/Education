// npm — менеджер пакетов, входящий в состав Node.js.

// Чтобы заинициализировать npm в папке проекта вводим в консоли команду: npm init
// Далее в консоли будут появляться по очереди свойства проекта, которые можно настроить, либо оставить по умолчанию
// В папке проекта появится файл package.json в котором будут все эти данные в формате JSON. В будущем в этот файл будут добавляться сведения об использующихся npm пакетах в проекте

// пакеты npm можно устанавливать глобально, используя флаг -g (в дальнейшем будут доступны в любом проекте системы даже без установки), либо локально (только в текущий проект)

// после установки любого пакета npm в папке проекта появиться каталог node modules ЕЁ НИКОГДА НЕ ТРОГАТЬ!
// чтобы не push-ить node modules на GitHub не забываем указывать её в .gitignore

// если внутри проекта нет папки node modules, но есть файл package.json, то чтобы установить все npm пакеты, которые использовались в проекте, просто вводим команду npm i, т.к. package.json содержит информацию о всех npm пакетах, которые использовались в проекте

// package-lock.json файл тоже НЕ ТРОГАЕМ, там записаны более мелкие зависимости зависимостей из основного package.json



// JSON-server  -простой сервер по работе с JSON файлами, которые мы можем использовать как маленькую базу данных. Эмуляция backend

// npm i json-server --save-dev   -установка json-server для разработи (внутри консоли)
// npm i json-server --save   -установка для работы внутри проекта (внутри кода)

// Чтобы воспользоваться сервером вводим команду npx json-server здесь_название_базы_данных.json (база данных должна быть в json формате и находиться в той же папке, где лежит папка node modules)
// После запуска в консоли увидим ссылки, по которым мы можем обратиться к базе

