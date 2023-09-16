/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

function myModule() {
    this.hello = function() {
        console.log('Hello');
    };

    this.goodbye = function() {
        console.log('Good bye!');
    };
}

// Экспорт функции (CommonJS)
module.exports = myModule;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// Импорт функции из main.js
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js");

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// Браузер не умеет собирать модули, для этого нужно использовать сборщик, например WebPack

// Знакомство с Webpack и установка: https://webpack.js.org/guides/getting-started/

// Запустить wp можно с дефолтным конфигом и созданным вручную

// Если используем дефолтный конфиг, то файл, куда мы импортируем модули, должен назваться index.js и находится в корне папки  src

// Если используем вручную созданный конфиг, то он будет находится в файле webpack.config.js

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map