const path = require('path');

const main = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/main/main.js',
  target: 'electron-main',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  node: {
    __dirname: false,
  },
};

module.exports = main;
