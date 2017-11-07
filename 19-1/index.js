/*eslint-disable*/
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');

var config = {assets:{images:{extensions:['jpg']}}};

new WebpackIsomorphicTools(config)
  .server(__dirname, function(){
    console.log(require('./icon.jpg'))
  })