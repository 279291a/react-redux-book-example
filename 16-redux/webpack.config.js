var path = require('path');
var webpack = require('webpack');

module.exports={
  devtools:'cheap-module-eval-source-map',
  entry:[
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output:{
    path: path.join(__dirname,'dist'),
    filename:'bundle.js',
    publicPath:'/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loader:[
      {
        test:/\.js$/,
        loaders:['babel'],
        exclude:/node_modules/,
        include:__dirname
      }
    ]
  }
}