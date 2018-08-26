var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src/app/');

var config = {
  entry: APP_DIR + '\\index.js',
  output: { 
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;