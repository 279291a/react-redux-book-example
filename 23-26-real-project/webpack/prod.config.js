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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:'"production"'
      },
      __SERVER__:false
    }),
    new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'))
  ],
  module:{
    loaders:[
      {test: /\.(jpeg|jpg|png|gif)$/,loader:'url-loader?limit=10240'},
      {
        test:/\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?module&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            +
          '!postcss'
        )
      },
      {
        test:/\.scss$/,
        loader:ExtractTextPlugin.extract(
          'style',
          'style',
          'css?module&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]'
            +
          '!postcss'+
          '!sass'
        )
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000"
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  postcss:[autofixer({browsers:['last 2 versions']})]
}