'use strict';
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');

var PROD = JSON.stringify(JSON.parse(process.env.PROD_DEV || 'false')) === 'true';

console.log('* Starting Webpack');
console.log('* PROD = ' + PROD);

/* Plugins */
var plugins = PROD ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.AggressiveMergingPlugin()
    ] : [];

/* ------- */
module.exports = {  
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath : 'js/'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader', 'react-map-styles']},
      {test: /\.scss$/, loaders: ["style","css","sass?sourceMap"]},
      {test: /\.css$/, loaders: ["style","css"]},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
      {test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=10000'},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
    ]
  },
  plugins: plugins
};