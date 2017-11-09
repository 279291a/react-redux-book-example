var path = require('path');
var webpack = require('webpack');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autofixer = require('autoprefixer');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');

module.exports = {
  devtools: 'source-map',
  context: projectRootPath,
  entry: [
    'bootstrap-loader/extractStyles',
    'font-awesome-loader!./src/them/font-awesome/font-awesome.config.prod.js',
    './build/client'
  ],
  output: {
    path: assetsPath,
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  progress: true,
  plugins: [
    new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
    new webpack.optimize
  ]
}