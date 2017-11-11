const path = require('path');
const webpackModule = require('./builder/utils/webpack-module');
const webpackPlugin = require('./builder/utils/webpack-plugin');
const smallprintrc = require('./.smallprintrc');

module.exports = (env) => {
  const entry = {};
  const destFolder = env === 'prod' ? 'build' : 'public';
  const dest = path.resolve(__dirname, './', destFolder);

  for (var i in smallprintrc.source.js) {
    entry[i] = path.resolve(__dirname, './app', smallprintrc.source.js[i]);
  }

  return {
    entry,
    output: {
      filename: '[name].js',
      chunkFilename: '[name].fragment.[id].js',
      path: dest
    },
    resolve: {
      modules: [
        path.resolve(__dirname, './app/src'),
        path.resolve(__dirname, './app/node_modules'),
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: webpackModule(),
    plugins: webpackPlugin()
  };
};
