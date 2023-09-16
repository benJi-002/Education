// Импорт функции из main.js
const myModule = require('./main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// Браузер не умеет собирать модули, для этого нужно использовать сборщик, например WebPack

// Знакомство с Webpack и установка: https://webpack.js.org/guides/getting-started/

// Запустить wp можно с дефолтным конфигом и созданным вручную

// Если используем дефолтный конфиг, то файл, куда мы импортируем модули, должен назваться index.js и находится в корне папки  src

// Если используем вручную созданный конфиг, то он будет находится в файле webpack.config.js
