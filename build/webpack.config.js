const main = require('./webpack.config.main');
const preload = require('./webpack.config.preload');
const renderer = require('./webpack.config.renderer');

module.exports = [main, preload, renderer];
