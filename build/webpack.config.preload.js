const path = require('path');

const preload = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/renderer/preload.js',
  target: 'electron-preload',
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, '../dist'),
  },
};

module.exports = preload;
