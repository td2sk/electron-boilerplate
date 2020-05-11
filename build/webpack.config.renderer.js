const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const renderer = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/renderer/renderer.js',
  target: 'web',
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'electron-boilerplate',
    }),
  ],
  devServer: {
    contentBase: 'dist',
    hot: true,
  },
};

module.exports = renderer;
