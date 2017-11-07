/*eslint-disable */
require('babel-register');

var path = require('path');
var rootDir = path.resolve(__dirname,'..');

var WebpackIsomorphicTools = require('webpack-isomophric-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  require('../wepack-isomophic-tools'))
  .development()
  .server(rootDir,function(){
    require('./server')
  })
