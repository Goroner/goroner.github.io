var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    filename: 'dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};