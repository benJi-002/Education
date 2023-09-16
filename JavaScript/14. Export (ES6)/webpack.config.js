'use strict';

// не трогаем
let path = require('path');

module.exports = {
  // режим, в котором будет работать wb (по дефолту production, в нём оптимизируется код)
  mode: 'development', 
  // файл с которого начинаем (по дефолту index.js) 
  entry: './src/js/script.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  // если true, то после первого запуска будет сам отслеживать изменения и сам собирать
  watch: true,
  // сохраняет исходники прежде чем превратить в оптимизированный код
  devtool: "source-map",
 
  module: {}
};