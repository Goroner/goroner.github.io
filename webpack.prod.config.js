var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/bundle.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'scripts/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({ React: 'react' }),
    new ExtractTextPlugin('styles/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: './src/index.hbs',
      minify: {
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        removeComments: true,
        html5: true,
        collapseWhitespace: true
      } 
    })
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=/images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file?name=/styles/fonts/[name].[ext]'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars'
      }
    ]
  }
};